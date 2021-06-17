import { Component } from '@angular/core';
import { IProduct, ProductsService } from "./products.service";
import { Observable } from "rxjs";
import { pluck } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
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
  public products$: Observable<IProduct[]> = this.productsService.getProducts();

  public constructor(
    private readonly productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
  ) {
    // console.log(this.productsService)
  }

  public toggleOnlyFavorites(e: MatCheckboxChange): void {
    this.onlyFavorites = e.checked;
  }


}
