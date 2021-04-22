import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  public doLogin(email: any, password: any) {
    const self = this;
    // return self._http.post("");
  }
}
