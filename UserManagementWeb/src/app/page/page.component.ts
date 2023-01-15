import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-page',
  styleUrls: ['./page.component.scss'],
  template: `
    <ngx-one-column-layout>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
