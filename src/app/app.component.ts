import { Component } from '@angular/core';
import { MatDrawer } from "@angular/material/sidenav";
import { IProduct, products$ } from "./products";
import { Observable } from "rxjs";
import { UnSubscriber } from "./shared/utils/unsubscriber";
import { tap } from "rxjs/operators";


@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends UnSubscriber {
  public title = {text: 'ngx170521 AWESOME'};
  public text = 'iphone';
  public drawer!: MatDrawer;
  public products!: IProduct[];
  public products$: Observable<IProduct[]> = products$.pipe(tap((v) => {
    console.log(v);
  }));

  // public ngOnInit(): void {
  //   // this.products$
  //   //   .pipe(takeUntil(this.getUnSubscriber()))
  //   //   .subscribe((p) => {
  //   //     this.products = p;
  //   //   }, (err) => {
  //   //     console.log(err)
  //   //   }, () => {
  //   //     console.log('COMPLETED')
  //   //   })
  // }


  public setSideNav(drawer: MatDrawer) {
    this.drawer = drawer;
    // this.cdr.detectChanges();
    // Promise.resolve().then(() => {
    //   this.drawer = drawer;
    // })
  }
  //
  // public productsFilter(products: IProduct[], text: string): IProduct[] {
  //   console.log('CALC')
  //
  // }
}
