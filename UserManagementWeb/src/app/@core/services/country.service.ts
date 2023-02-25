import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";
import { Country } from '../interfaces/common/countries';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private api: string = environment.apiUrl + "/Country"
  constructor(private http: HttpClient){

  }

  getCountries(): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.api}/GetAll`);
  }
  getCountryById(id: number): Observable<Country>{
    return this.http.get<Country>(`${this.api}/GeById?id=`+id);
  }
  addCountry(data: any): Observable<any>{
    return this.http.post<any>(`${this.api}/Add`,data);
  }
  updateCountry(data: any): Observable<any>{
    return this.http.put(`${this.api}/Update`,data);
  }

  deleteUser(id: number): Observable<any>{
    return this.http.delete(`${this.api}/Delete?id=`+id);
  }

}
