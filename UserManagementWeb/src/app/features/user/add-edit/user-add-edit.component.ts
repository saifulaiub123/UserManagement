import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { UserCustomActionComponent } from '../../../@components/custom-smart-table-components/user-custom-action/user-custom-action.component';
import { User } from '../../../@core/model/user';
import { UserService } from '../../../@core/services/user.service';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.scss']
})
export class UserAddEditComponent implements OnInit {

users: User[] = [];
userAddEditFormGroup: FormGroup;

submitted: boolean = false;
loading = false;

pageTitle: string = "User Edit"

sourceUser: LocalDataSource = new LocalDataSource();

 settingsSourceUser = {
  edit : false,
    delete : false,
    add : false,
  actions: {
    add: false,
    delete: false,
    edit: false
  },
   hideSubHeader : false,
   noDataMessage : "No data found",
   columns: {
    id: {
      title: 'Id',
      type: 'number',
      filter: false,
      hide: true
    },
    name: {
      title: 'Name',
      type: 'string',
      filter: true,
    },
    email: {
      title: 'Email',
      type: 'string',
      filter:true,
    },
    phoneNumber: {
      title: 'Phone Number',
      type: 'string',
      filter:true,
    },
    action: {
      title: 'Action',
      type: 'custom',
      renderComponent: UserCustomActionComponent,
      valuePrepareFunction: (value, row, cell) => {
        return value;
      },
      filter: false,
    }
  },
  attr: {
    class: 'table table-bordered'
  }
};


  constructor(
    private _userService: UserService,
    private fb: FormBuilder,
    private toastrService: NbToastrService
    ) { }


    get name() { return this.userAddEditFormGroup.get('name'); }
    get email() { return this.userAddEditFormGroup.get('email'); }
    get phoneNumber() { return this.userAddEditFormGroup.get('phoneNumber'); }

  ngOnInit(): void {
    this.loadData();
    this.createFormGroup();
  }

  loadData()
  {
    this._userService.getUsers().subscribe(data => {
      this.users = data;
      this.sourceUser.load(data);
    })
  }
  createFormGroup()
  {
    this.userAddEditFormGroup = this.fb.group({
      name: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required]),
      phoneNumber: this.fb.control(null, []),
      role: this.fb.control(null, []),
    });
  }

  submit()
  {
    this.loading = true;

  }
  cancel()
  {

  }

}


