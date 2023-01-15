import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { UserCustomActionComponent } from '../../../@components/custom-smart-table-components/user-custom-action/user-custom-action.component';
import { Role } from '../../../@core/model/role';
import { User } from '../../../@core/model/user';
import { RoleService } from '../../../@core/services/role.service';
import { UserService } from '../../../@core/services/user.service';
import { UserSharedService } from '../../user/user-shared.service';


@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() userId : number = 0;

user: User = {};
rolesData: Role[] = [];
selectedRoles: number[] = [];
checkArray: FormArray;
userAddEditFormGroup: FormGroup;

submitted: boolean = false;
loading = false;
isFormValid = false;
isEditMode = this.userId != 0 ? true : false;

pageTitle: string = "Profile"



  constructor(
    private _userService: UserService,
    private _roleService: RoleService,
    private _userSharedService: UserSharedService,
    private _fb: FormBuilder,
    private _toastrService: NbToastrService,
    ) { }


    get name() { return this.userAddEditFormGroup.get('name'); }
    get email() { return this.userAddEditFormGroup.get('email'); }
    get phoneNumber() { return this.userAddEditFormGroup.get('phoneNumber'); }
    get roles() { return <FormArray> this.userAddEditFormGroup.get('roles'); }


  ngOnInit(): void {
    this.createFormGroup();
    this.loadData();
  }
  createFormGroup()
  {
    this.userAddEditFormGroup = this._fb.group({
      id: this._fb.control(null, [Validators.required]),
      name: this._fb.control(null, [Validators.required]),
      email: this._fb.control(null, [Validators.required]),
      phoneNumber: this._fb.control(null, []),
      roles: this._fb.array([],Validators.min(1))
    });
  }

  loadData()
  {
    this._roleService.getRoles().subscribe(data => {
      this.rolesData = data;
    })
    if(this.userId != 0)
    {
      this._userService.getUserById(this.userId).subscribe(data => {
        this.user = data;
      const checkArray: FormArray = this.userAddEditFormGroup.get('roles') as FormArray;
        this.user.userRoles.map(x => {
          checkArray.push(new FormControl(x.roleId));
        })
        this.userAddEditFormGroup.patchValue(data);
      })
    }
  }


  // onCheckboxChange(e) {
  //    this.checkArray = this.userAddEditFormGroup.get('roles') as FormArray;
  //   if (e.target.checked) {
  //     this.checkArray.push(new FormControl(e.target.value));
  //   } else {
  //     let i: number = 0;
  //     this.checkArray.controls.forEach((item: FormControl) => {
  //       if (item.value == e.target.value) {
  //         this.checkArray.removeAt(i);
  //         return;
  //       }
  //       i++;
  //     });
  //   }
  // }
  submit()
  {
    this.loading = false;
    let data = this.userAddEditFormGroup.value;
    this._userService.updateUser(data).subscribe(() =>{
      this._userSharedService.setUserUpdateStatus(true);
      this._toastrService.success("Successfull","Updated Successfully");
    })
  }
}


