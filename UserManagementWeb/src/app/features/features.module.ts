import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features-routing.module';

@NgModule({
  imports: [
    FeaturesRoutingModule,
    ThemeModule,
    NbMenuModule,
  ],
  declarations: [
    FeaturesComponent,
  ],
})
export class FeaturesModule {
}
