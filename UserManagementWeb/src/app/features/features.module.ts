import { NgModule } from '@angular/core';
import { NbCardComponent, NbMenuModule, NbCardModule, NbButtonModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { UserComponent } from './user/user/user.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

@NgModule({
  imports: [
    FeaturesRoutingModule,
    ThemeModule,
    NbMenuModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbButtonModule
  ],
  declarations: [
    FeaturesComponent,
    UserComponent,
    DashboardComponent
  ],
})
export class FeaturesModule {
}
