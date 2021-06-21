import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getProductsPending, getProductsSuccess } from "../actions/products.actions";
import { catchError, map, switchMap } from "rxjs/operators";
import { IProduct, ProductsService } from "../../products.service";
import { EMPTY } from "rxjs";

@Injectable()
export class ProductsEffects {

  public getProductsPending$ = createEffect(() => this.actions$.pipe(
    ofType(getProductsPending),
    switchMap(() => this.productsService.getProducts()
      .pipe(
        map((products: IProduct[]) => getProductsSuccess({products})),
        catchError(() => EMPTY)
      ))
    )
  );

  public constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {
  }
}
