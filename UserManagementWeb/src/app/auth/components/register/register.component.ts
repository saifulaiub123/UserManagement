
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NB_AUTH_OPTIONS, NbAuthSocialLink, NbAuthService, NbAuthResult } from '@nebular/auth';
import { RegisterModel } from '../../../@core/model/register-model';
import { getDeepFromObject } from '../../helpers';
import { EMAIL_PATTERN } from '../../../@core/const/constants';

@Component({
  selector: 'ngx-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  minLoginLength: number = this.getConfigValue(('forms.validation.name.minLength'));
  maxLoginLength: number = this.getConfigValue(('forms.validation.name.maxLength'));
  minLength: number = this.getConfigValue('forms.validation.password.minLength');
  maxLength: number = this.getConfigValue('forms.validation.password.maxLength');
  isNameRequired: boolean = this.getConfigValue('forms.validation.name.required');
  isSurnameRequired: boolean = this.getConfigValue('forms.validation.surname.required');
  isEmailRequired: boolean = this.getConfigValue('forms.validation.email.required');
  isPasswordRequired: boolean = this.getConfigValue('forms.validation.password.required');
  redirectDelay: number = this.getConfigValue('forms.register.redirectDelay');
  showMessages: any = this.getConfigValue('forms.register.showMessages');
  strategy: string = this.getConfigValue('forms.register.strategy');
  socialLinks: NbAuthSocialLink[] = this.getConfigValue('forms.login.socialLinks');

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  registerModel: RegisterModel = {};

  registerForm: FormGroup;
  constructor(protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    private fb: FormBuilder,
    protected router: Router) {
  }

  get name() { return this.registerForm.get('name'); }
  get surname() { return this.registerForm.get('surname'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }
  // get terms() { return this.registerForm.get('terms'); }

  ngOnInit(): void {
    const nameValidators = [
      Validators.minLength(this.minLoginLength),
      Validators.maxLength(this.maxLoginLength),
    ];
    this.isNameRequired && nameValidators.push(Validators.required);

    const surnameValidators = [
      Validators.minLength(this.minLoginLength),
      Validators.maxLength(this.maxLoginLength),
    ];
    this.isSurnameRequired && surnameValidators.push(Validators.required);

    const emailValidators = [
      Validators.pattern(EMAIL_PATTERN),
    ];
    this.isEmailRequired && emailValidators.push(Validators.required);

    const passwordValidators = [
      Validators.minLength(this.minLength),
      Validators.maxLength(this.maxLength),
    ];
    this.isPasswordRequired && passwordValidators.push(Validators.required);

    this.registerForm = this.fb.group({
      name: this.fb.control('', [...nameValidators]),
      surname: this.fb.control('', [...surnameValidators]),
      email: this.fb.control('', [...emailValidators]),
      password: this.fb.control('', [...passwordValidators]),
      confirmPassword: this.fb.control('', [...passwordValidators]),
      // terms: this.fb.control(''),
    });
  }

  register(): void {
    this.registerModel.name = this.registerForm.controls.name.value;
    this.registerModel.surname = this.registerForm.controls['surname'].value;
    this.registerModel.email = this.registerForm.controls['email'].value;
    this.registerModel.password = this.registerForm.controls['password'].value;


    this.errors = this.messages = [];
    this.submitted = true;

    this.service.register(this.strategy, this.registerModel).subscribe((result: NbAuthResult) => {
      this.submitted = false;
      if (result.isSuccess()) {
        this.messages = result.getMessages();
        this.router.navigateByUrl("auth/login");
      } else {
        this.errors = result.getErrors();
      }

      const redirect = result.getRedirect();
      if (redirect) {
        setTimeout(() => {
          return this.router.navigateByUrl(redirect);
        }, this.redirectDelay);
      }
      this.cd.detectChanges();
    });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
}
