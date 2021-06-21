import { Component, OnInit } from '@angular/core';
import { IProduct } from "./products.service";
import { Observable } from "rxjs";
import { pluck } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
import { MatCheckboxChange } from "@angular/material/checkbox";
import { Store } from "@ngrx/store";
import { getProductsPending, setProductsFilter } from "./store/actions/products.actions";
import { filteredProducts, IProductsState } from "./store/reducers/products.reducers";

@Component({
  selector: 'course-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public title$ = this.activatedRoute.data.pipe(pluck('title'));
  public text$ = this.store.select('products', 'filters', 'text');
  public products$: Observable<IProduct[]> = this.store.select(filteredProducts);
  public isLoading$: Observable<boolean> = this.store.select('products', 'isLoading');

  public constructor(
    private readonly store: Store<{ products: IProductsState }>,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  public ngOnInit() {
    this.store.dispatch(getProductsPending())
  }

  public toggleOnlyFavorites(e: MatCheckboxChange): void {
    this.store.dispatch(setProductsFilter({filters: {onlyFavorites: e.checked}}))
  }

  public searchItem(text: string) {
    this.store.dispatch(setProductsFilter({filters: {text}}))
  }

}
