import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UserCustomActionComponent } from '../../@components/custom-smart-table-components/user-custom-action/user-custom-action.component';
import { Country } from '../../@core/interfaces/common/countries';
import { UserService } from '../../@core/mock/users.service';
import { CountryService } from '../../@core/services/country.service';
import { UserSharedService } from '../user/user-shared.service';

@Component({
  selector: 'ngx-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  countries: Country[] = [];

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
        renderComponent: UserCustomActionComponent,
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

    constructor(private _countrytService: CountryService) { }

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
      this._countrytService.getCountries().subscribe(data => {
        this.countries = data;
        this.sourceCountry.load(data);
      })
    }

  }


