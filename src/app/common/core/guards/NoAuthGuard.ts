import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/LocalStorageService';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(
    private readonly _localStorageService: LocalStorageService,
    private readonly _router: Router
    ) {
  }
  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.canActivateAnything()) {
      this._router.navigateByUrl('/')
    }
    return true
  }


  private canActivateAnything(): boolean {
    return !!this._localStorageService.getValue('token');
  }

}
