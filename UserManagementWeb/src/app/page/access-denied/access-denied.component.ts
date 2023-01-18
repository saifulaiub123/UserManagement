import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'ngx-access-denied',
  styleUrls: ['./access-denied.component.scss'],
  templateUrl: './access-denied.component.html',
})
export class AccessDeniedComponent {

  constructor(private menuService: NbMenuService,private location: Location) {
  }

  goBack() {
    this.location.back();
  }
}
