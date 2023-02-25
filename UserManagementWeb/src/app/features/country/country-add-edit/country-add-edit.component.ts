import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NbToastrService, NbDialogRef } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { CountryModel } from '../../../@core/model/country-model';
import { Role } from '../../../@core/model/role';
import { CountryService } from '../../../@core/services/country.service';
import { UserAddEditComponent } from '../../user/add-edit/user-add-edit.component';

@Component({
  selector: 'ngx-country-add-edit',
  templateUrl: './country-add-edit.component.html',
  styleUrls: ['./country-add-edit.component.scss']
})
export class CountryAddEditComponent implements OnInit {

  @Input() countryId : number = 0;

  country: CountryModel = {};
  countryAddEditFormGroup: FormGroup;

  submitted: boolean = false;
  loading = false;
  isFormValid = false;
  isEditMode = this.countryId != 0 ? true : false;

  pageTitle: string = "Country Add/Edit"


    constructor(
      private _countryService: CountryService,
      private _fb: FormBuilder,
      private _toastrService: NbToastrService,
      private _route: ActivatedRoute
      ) { }


      get name() { return this.countryAddEditFormGroup.get('name'); }

    ngOnInit(): void {
      this.countryId = parseInt(this._route.snapshot.paramMap.get('countryId'))
      this.countryId = isNaN(this.countryId) ? 0 : this.countryId;
      // this._route.queryParams.subscribe(params => {
      //   this.countryId = params['countryId'];
      // });
      this.createFormGroup();
      this.loadData();
    }
    createFormGroup()
    {
      this.countryAddEditFormGroup = this._fb.group({
        id: this._fb.control(null, [Validators.required]),
        name: this._fb.control(null, null),
      });
    }

    loadData()
    {
      if(this.countryId != 0)
      {
        this._countryService.getCountryById(this.countryId).subscribe(data => {
          this.country = data;

          this.countryAddEditFormGroup.patchValue(data);
        })
      }
    }

    submit()
    {
      this.loading = false;
      let data = this.countryAddEditFormGroup.value;
      if(this.countryId == 0)
      {
        this._countryService.addCountry(data).subscribe(() =>{
          this._toastrService.success("Successfull","Added Successfully");
        })
      }
      else{
        data['id'] = this.countryId;
        this._countryService.updateCountry(data).subscribe(() =>{
          this._toastrService.success("Successfull","Updated Successfully");
        })
      }

    }
    cancel()
    {

    }

  }


