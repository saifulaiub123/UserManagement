import { CountryService } from './../../../@core/services/country.service';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UserCustomActionComponent } from '../../../@components/custom-smart-table-components/user-custom-action/user-custom-action.component';
import { Country } from '../../../@core/interfaces/common/countries';
import { UserService } from '../../../@core/mock/users.service';
import { UserSharedService } from '../../user/user-shared.service';
import { Router } from '@angular/router';
import { CountryModel } from '../../../@core/model/country-model';
import { CountryActionComponent } from '../../../@components/custom-smart-table-components/country-action/country-action.component';

@Component({
  selector: 'ngx-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent  implements OnInit {

  countries: CountryModel[] = [];

  sourceCountry: LocalDataSource = new LocalDataSource();

   settingsSourceCountry = {
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
      action: {
        title: 'Action',
        type: 'custom',
        renderComponent: CountryActionComponent,
        valuePrepareFunction: (value, row, cell) => {
          return row.id;
        },
        filter: false,
      }
    },
    attr: {
      class: 'table table-bordered'
    }
  };

    constructor(private _countryService: CountryService,private _userSharedService: UserSharedService,private _router: Router) { }

    ngOnInit(): void {
      this.subscribeSharedData();
      this.loadData();
    }
    subscribeSharedData(){
      // this._userSharedService.isUserUpdated$.subscribe((status : boolean) => {
      //   if(status)
      //   {
      //     this.loadData();
      //   }
      //  });

    }

    loadData()
    {
      this._countryService.getCountries().subscribe(data => {
        this.countries = data;
        this.sourceCountry.load(data);
      })
    }

    navigateToAddEdit()
    {
      this._router.navigate(['feature/country/add-edit']);
    }

  }

