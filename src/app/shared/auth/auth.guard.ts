import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {

  public constructor(
    private router: Router
  ) {
  }

  public canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const url = state.url;
    return of(false)
      .pipe(
        map((isLogged: boolean) => {
          if (!isLogged && (url === '/login' || url === '/signup')) {
            return true;
          }
          if (isLogged && (url === '/login' || url === '/signup')) {
            this.router.navigate(['/backoffice'])
            return false;
          }
          if (!isLogged) {
            this.router.navigate(['/login'])
          }
          return isLogged;
        })
      )
  };

}
