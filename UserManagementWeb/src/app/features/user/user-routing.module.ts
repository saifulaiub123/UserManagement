import { UserAddEditComponent } from './add-edit/user-add-edit.component';
import { UserListComponent } from './list/user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'list',
      component: UserListComponent,
    },
    {
      path: 'add-edit',
      component: UserAddEditComponent,
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
export class UserRoutingModule {
}
