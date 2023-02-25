import { CountryService } from './../../../@core/services/country.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-country-action',
  templateUrl: './country-action.component.html',
  styleUrls: ['./country-action.component.scss']
})
export class CountryActionComponent implements OnInit {

  @Input() value: number;
  constructor(private _router: Router,
    private _countryService: CountryService,
    private _toastrService: NbToastrService,) { }

  ngOnInit(): void {
    let p = 10;
  }

  navigateToAddEdit()
  {
    this._router.navigate(['feature/country/add-edit', { countryId: this.value } ]);
  }
  delete()
  {
    this._countryService.delete(this.value).subscribe((data) =>{
      this._toastrService.success("Successfull","Deleted Successfully");
      window.location.reload();
    });
  }

}
