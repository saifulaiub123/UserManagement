import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { User } from "../data/users";
import { BookingFilterModel } from "../model/booking-filter-model";
import { BookingModel } from "../model/booking-model";
import { BookingPageModel } from "../model/booking-page-model";
import { BookingViewModel } from "../model/booking-view-model";
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
}
