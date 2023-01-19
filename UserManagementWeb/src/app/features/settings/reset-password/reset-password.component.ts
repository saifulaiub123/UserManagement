import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { User } from '../../../@core/model/user';
import { UserService } from '../../../@core/services/user.service';
import { getDeepFromObject } from '../../../auth/helpers';
import { NB_AUTH_OPTIONS } from '@nebular/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  @Input() userId: number = 0;
  resetPasswordFormGroup: FormGroup;

  submitted: boolean = false;
  loading = false;
  isFormValid = false;
  isAdmin: boolean;

  pageTitle: string = "Reset Password"

  chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  minLength: number = this.getConfigValue('forms.validation.password.minLength');
  maxLength: number = this.getConfigValue('forms.validation.password.maxLength');



  constructor(
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    private _userService: UserService,
    private _fb: FormBuilder,
    private _toastrService: NbToastrService,
    private _router: Router
    ) { }


  get newPassword() { return this.resetPasswordFormGroup.get('newPassword'); }


  ngOnInit(): void {
    this. createFormGroup();
  }
  createFormGroup()
  {

    const passwordValidators = [
      Validators.minLength(this.minLength),
      Validators.maxLength(this.maxLength),
    ];

    this.resetPasswordFormGroup = this._fb.group({
      newPassword: this._fb.control('', [...passwordValidators]),
    });
  }
  generateNewPassword()
  {
    let password = "";
    for (var i = 0; i <= 8; i++) {
      var randomNumber = Math.floor(Math.random() * this.chars.length);
      password += this.chars.substring(randomNumber, randomNumber +1);
     }
     this.newPassword.setValue(password);
  }
  resetPassword()
  {
    this.loading = true;
    this.submitted = true;
    let data =
    {
      userId : this.userId,
      newPassword : this.resetPasswordFormGroup.value.newPassword
    }
    this._userService.resetPassword(data).subscribe(() =>{
      this.loading = false;
      this.resetPasswordFormGroup.reset();
      this._toastrService.success("Successfull","Updated Successfully");
    })
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
}


