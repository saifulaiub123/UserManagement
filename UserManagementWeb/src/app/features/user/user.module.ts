import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { NbCardComponent, NbMenuModule, NbCardModule, NbButtonModule, NbInputModule, NbSpinnerModule, NbCheckboxModule, NbIconModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../@components/components.module';
import { UserListComponent } from './list/user-list.component';
import { UserAddEditComponent } from './add-edit/user-add-edit.component';
import { CommonModule } from '@angular/common';
import { SettingsModule } from '../settings/settings.module';

@NgModule({
  imports: [
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
  ],
  declarations: [
    UserListComponent,
    UserAddEditComponent
  ],
})
export class UserModule {
}
