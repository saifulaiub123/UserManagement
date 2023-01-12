
import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { DashboardComponent } from '../../features/dashboard/dashboard/dashboard.component';

@Component({
  selector: 'ngx-user-custom-action',
  templateUrl: './user-custom-action.component.html',
  styleUrls: ['./user-custom-action.component.scss']
})
export class UserCustomActionComponent implements OnInit {

  @Input() value: string | number;

  constructor(private _dialogService: NbDialogService,) { }

  ngOnInit() {
  }

  openEditModal()
  {
    let p = this.value;
    this._dialogService.open(DashboardComponent, {
      hasScroll: true,
      closeOnBackdropClick: true,
      autoFocus: false
    })
    .onClose.subscribe(value => {
      if(value)
      {

      }
    }
    );

  }

}
