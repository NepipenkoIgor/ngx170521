import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { EMPTY, Observable } from "rxjs";
import { IProduct, ProductsService } from "../products.service";
import { map } from "rxjs/operators";

@Injectable()
export class ProductResolverService implements Resolve<any> {

  public constructor(
    private readonly productsService: ProductsService,
    private readonly router: Router,
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<IProduct | null> {
    const id = route.paramMap.get('id');
    if (!id) {
      this.router.navigate(['/backoffice'])
      return EMPTY;
    }
    return this.productsService.getOneProduct(id)
      .pipe(map((product: IProduct | null) => {
        if (!product) {
          this.router.navigate(['/backoffice'])
        }
        return product;
      }))
  }

}
