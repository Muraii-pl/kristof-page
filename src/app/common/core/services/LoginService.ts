import { Injectable } from '@angular/core';
import { ApiService } from './ApiService';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private readonly _apiService: ApiService
  ) { }

  // public login(loginCredentials: any): Observable<string> {
  //   return this._apiService.post('/login', loginCredentials)
  // }

  public login (loginCredentials: any): Observable<string> {
    return of('token')
  }


}
