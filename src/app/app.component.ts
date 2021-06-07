import { Component } from '@angular/core';
import { MatDrawer } from "@angular/material/sidenav";
import { Observable } from "rxjs";
import { UnSubscriber } from "./shared/utils/unsubscriber";
import { tap } from "rxjs/operators";
import { MatCheckboxChange } from "@angular/material/checkbox";
import { IProduct, ProductsService } from "./products.service";


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
  public products$: Observable<IProduct[]> = this.productsService.getProducts().pipe(tap((v) => {
    console.log('TAP ==>', v);
  }));

  public constructor(
    private readonly productsService: ProductsService
  ) {
    super();
    // console.log(this.productsService)
  }


  public setSideNav(drawer: MatDrawer) {
    this.drawer = drawer;
  }

  public toggleOnlyFavorites(e: MatCheckboxChange): void {
    this.onlyFavorites = e.checked;
  }
}
