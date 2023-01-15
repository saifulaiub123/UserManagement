import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMenuService, NbMenuItem } from '@nebular/theme';
import { title } from 'process';
import { Subject } from 'rxjs';

import { MENU_ITEMS } from './features-menu';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-one-column-layout>
      <nb-menu tag="menu" [items]="[]"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class FeaturesComponent implements OnInit,OnDestroy {

  menu: NbMenuItem[] = [];
  roles: string[] = [];
  private destroy$ = new Subject<void>();
  constructor(private menuService: NbMenuService){

  }
  ngOnInit(): void {
    this.generateMenuItems();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  generateMenuItems(){
    this.roles = (JSON.parse(localStorage.getItem("UserData")).role).split(',');
    MENU_ITEMS.forEach(item => {
      if (item.role.length == 0)
      {
        this.addMenuItem(item);
      }
      else
      {
        const found = item.role.find((val, index) => {
          return this.roles.includes(val)
        });

        if(found !== undefined)
        {
          this.addMenuItem(item);
        }
      }
    })
    this.menuService.addItems(this.menu, 'menu');
  }

  addMenuItem(item: any)
  {
    this.menu.push({
      title: item.title,
      icon: item.icon,
      link: item.link,
    });
  }
}
