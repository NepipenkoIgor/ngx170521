import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route, Router } from "@angular/router";
import { EMPTY, Observable, of } from "rxjs";
import { delay, switchMap } from "rxjs/operators";

@Injectable()
export class PreloadService extends PreloadingStrategy {


  public constructor(
    private router: Router
  ) {
    super();
  }

  public preload(route: Route, fn: () => Observable<any>): Observable<any> {
    const inBackoffice = this.router.url.includes('backoffice');
    const isCartRoute = route.path!.includes('cart');
    console.log(route);
    if (!inBackoffice || !isCartRoute) {
      return EMPTY;
    }
    return of(route)
      .pipe(delay(3000), switchMap(() => {
        return fn();
      }));
  }
}
