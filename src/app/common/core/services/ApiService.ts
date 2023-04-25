import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private readonly _http: HttpClient
  ) {
  }

  public get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this._http.get(
      `${ environment.apiUrl }${ path }`, { params })
    .pipe(catchError(this.formatErrors))
  }

  public post(path: string, body: Object = {}, params: HttpParams = new HttpParams()): Observable<any> {
    return this._http.post(
      `${ environment.apiUrl }${ path }`,
      JSON.stringify(body), {
        params,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).pipe(catchError(this.formatErrors))
  }

  public put(path: string, body: Object = {}): Observable<any> {
    return this._http.put(
      `${ environment.apiUrl }${ path }`,
      JSON.stringify(body), {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).pipe(catchError(this.formatErrors))
  }

  public delete(path: string): Observable<any> {
    return this._http.delete(
      `${ environment.apiUrl }${ path }`
    ).pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any) {
    return throwError(error.error)
  }
}
