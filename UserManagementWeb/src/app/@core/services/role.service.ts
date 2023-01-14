import { NumberWithCommasPipe } from './../../@theme/pipes/number-with-commas.pipe';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { BookingFilterModel } from "../model/booking-filter-model";
import { BookingModel } from "../model/booking-model";
import { BookingPageModel } from "../model/booking-page-model";
import { BookingViewModel } from "../model/booking-view-model";
import { User } from '../model/user';
import { Role } from '../model/role';
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private api: string = environment.apiUrl + "/Role";
  constructor(private http: HttpClient){

  }

  getRoles(): Observable<Role[]>{
    return this.http.get<Role[]>(`${this.api}/GetRoles`);
  }
}
