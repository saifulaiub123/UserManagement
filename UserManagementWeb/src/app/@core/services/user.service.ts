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
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api: string = environment.apiUrl + "/User";
  constructor(private http: HttpClient){

  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.api}/GetUsers`);
  }
  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.api}/GetUserById?id=`+id);
  }
  updateUser(data: any): Observable<any>{
    return this.http.patch(`${this.api}/UpdateUser`,data);
  }
  changePassword(data: any): Observable<any>{
    return this.http.patch(`${this.api}/ChangePassword`,data);
  }
  resetPassword(data: any): Observable<any>{
    return this.http.patch(`${this.api}/ResetPassword`,data);
  }

}
