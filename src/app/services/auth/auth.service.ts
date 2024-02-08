import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = ["https://bookstore822024-production.up.railway.app/"]

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signup(signuprequest : any): Observable<any>{
    return this.http.post<[]>(BASIC_URL + "api/auth/signup",signuprequest);
  }

  login(loginrequest : any): Observable<any>{
    return this.http.post<[]>(BASIC_URL + "api/auth/login",loginrequest);
  }

}
