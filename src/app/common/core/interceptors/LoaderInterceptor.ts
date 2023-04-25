import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { LoaderService } from '../services/LoaderService';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  private _totalRequests = 0;

  constructor(
    private readonly loaderService: LoaderService
  ) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._totalRequests++;
    this.loaderService.show();

    return next.handle(req).pipe(
      finalize(() => {
        this._totalRequests--;
        if (this._totalRequests === 0) {
          this.loaderService.hide()
        }
      })
    )
  }

}
