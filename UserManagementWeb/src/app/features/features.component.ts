import { Component } from '@angular/core';

import { MENU_ITEMS } from './features-menu';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class FeaturesComponent {

  menu = MENU_ITEMS;
}
