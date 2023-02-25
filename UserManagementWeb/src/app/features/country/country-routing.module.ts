import { CountryAddEditComponent } from './country-add-edit/country-add-edit.component';
import { CountryListComponent } from './country-list/country-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../../auth/auth.guard';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'list',
      canActivate: [AuthGuard],
      data: {
        role: ['Admin','User']
      },
      component: CountryListComponent,
    },
    {
      path: 'add-edit',
      canActivate: [AuthGuard],
      data: {
        role: ['Admin','User']
      },
      component: CountryAddEditComponent,
    },
    {
      path: 'add-edit/:countryId',
      canActivate: [AuthGuard],
      data: {
        role: ['Admin','User']
      },
      component: CountryAddEditComponent,
    },
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryRoutingModule {
}
