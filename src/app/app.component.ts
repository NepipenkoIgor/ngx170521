import { Component, Type } from '@angular/core';
import { MatDrawer } from "@angular/material/sidenav";
import { IProduct, products$ } from "./products";
import { Observable } from "rxjs";
import { UnSubscriber } from "./shared/utils/unsubscriber";
import { tap } from "rxjs/operators";
import { MatCheckboxChange } from "@angular/material/checkbox";


@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends UnSubscriber {
  public title = {text: 'ngx170521 AWESOME'};
  public text = '31';
  public drawer!: MatDrawer;
  public products!: IProduct[];
  public onlyFavorites: boolean = false;
  public products$: Observable<IProduct[]> = products$.pipe(tap((v) => {
    console.log(v);
  }));


  public setSideNav(drawer: MatDrawer) {
    this.drawer = drawer;
  }

  public toggleOnlyFavorites(e: MatCheckboxChange): void {
    this.onlyFavorites = e.checked;
  }
}

interface Acc<T> {
  id: T;
}

const u1: Acc<number> = {
  id: 1,
}

const u1: Acc<string> = {
  id: '1'
}
