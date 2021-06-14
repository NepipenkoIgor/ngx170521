import { Component } from '@angular/core';
import { IProduct, ProductsService } from "./products.service";
import { Observable } from "rxjs";
import { filter, pluck, take, tap } from "rxjs/operators";
import { ActivatedRoute, Event, NavigationStart, Router } from "@angular/router";
import { MatCheckboxChange } from "@angular/material/checkbox";

@Component({
  selector: 'course-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public title$ = this.activatedRoute.data.pipe(pluck('title'));

  public text = '31';
  public products!: IProduct[];
  public onlyFavorites: boolean = false;
  public products$: Observable<IProduct[]> = this.productsService.getProducts().pipe(tap((v) => {
    console.log('TAP ==>', v);
  }));

  public constructor(
    private readonly productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    // console.log(this.productsService)
    this.router.events
      .pipe(
        filter((e: Event): e is NavigationStart => e instanceof NavigationStart),
        filter((e: NavigationStart) => e.id === 1),
        take(1)
      )
      .subscribe((v) => {
        console.log(v);
      })
  }

  public toggleOnlyFavorites(e: MatCheckboxChange): void {
    this.onlyFavorites = e.checked;
  }


}
