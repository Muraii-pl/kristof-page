import { Injectable } from '@angular/core';
import { ApiService } from '../../../common/core/services/ApiService';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class DashboardPagesService<T> {

  public abstract baseUrl: string

  protected constructor(
    protected readonly apiService: ApiService
  ) {
  }

  public getAll(): Observable<T[]> {
    return this.apiService.get(`${ this.baseUrl }/all`)
  }

  public getOne(id: number): Observable<T> {
    return this.apiService.get(`${ this.baseUrl }/${ id }`)
  }

  public post(data: T): Observable<T> {
    return this.apiService.post(`${ this.baseUrl }/create`, data)
  }

  public put(data: T, id: number): Observable<T> {
    return this.apiService.put(`${ this.baseUrl }/${ id }`, data)
  }

  public delete(id: number): Observable<T> {
    return this.apiService.delete(`${ this.baseUrl }/${ id }`)
  }


}
