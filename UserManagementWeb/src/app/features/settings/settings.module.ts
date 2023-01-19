import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SettingsRoutingModule } from './settings-routing-module';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule, NbMenuModule, NbPopoverModule, NbSpinnerModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../@components/components.module';
import { UserRoutingModule } from '../user/user-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ThemeModule } from '../../@theme/theme.module';
import { ClipboardModule } from 'ngx-clipboard';



@NgModule({
  declarations: [
    ProfileComponent,
    ChangePasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    NbCardModule,
    NbCheckboxModule,
    NbSpinnerModule,
    NbMenuModule,
    Ng2SmartTableModule,
    NbButtonModule,
    ComponentsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    NbInputModule,
    ClipboardModule,
    NbPopoverModule
  ],
  exports:[
    ResetPasswordComponent
  ]
})
export class SettingsModule { }
