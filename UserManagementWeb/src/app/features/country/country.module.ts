import { CountryRoutingModule } from './country-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryAddEditComponent } from './country-add-edit/country-add-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NbMenuModule, NbCardModule, NbButtonModule, NbInputModule, NbSpinnerModule, NbCheckboxModule, NbIconModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../@components/components.module';
import { SettingsModule } from '../settings/settings.module';
import { UserRoutingModule } from '../user/user-routing.module';



@NgModule({
  declarations: [
    CountryListComponent,
    CountryAddEditComponent
  ],
  imports: [
    CountryRoutingModule,

    NbMenuModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbButtonModule,
    ComponentsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    NbInputModule,
    NbSpinnerModule,
    CommonModule,
    NbCardModule,
    NbCheckboxModule,
    SettingsModule,
    NbIconModule
  ]
})
export class CountryModule { }
