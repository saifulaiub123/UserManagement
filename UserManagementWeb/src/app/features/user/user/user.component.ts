import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UserCustomActionComponent } from '../../../@components/user-custom-action/user-custom-action.component';
import { User } from '../../../@core/model/user';
import { UserService } from '../../../@core/services/user.service';

@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

users: User[] = [];

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

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData()
  {
    this._userService.getUsers().subscribe(data => {
      this.users = data;
      this.sourceUser.load(data);
    })
  }

}


