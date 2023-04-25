import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  private readonly _isAuthenticatedSubject$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  public isAuthenticated$: Observable<boolean> = this._isAuthenticatedSubject$.asObservable();

  constructor() { }
}
