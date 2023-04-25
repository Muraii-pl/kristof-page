import { ApplicationRef, Injectable } from '@angular/core';
import {  Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private _isLoading$ = new Subject<boolean>()
  constructor(  ) { }

  public show(): void {
    this._isLoading$.next(true)
  }

  public hide(): void {
    this._isLoading$.next(false)
  }

  public getLoaderStatus(): Observable<boolean> {
    return this._isLoading$.asObservable();
  }
}
