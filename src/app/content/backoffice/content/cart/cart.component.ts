import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { pluck } from "rxjs/operators";
import { ICartProduct } from "../../store/reducers/cart.reducers";
import { Store } from "@ngrx/store";
import {
  removeAllProductsFromCart,
  removeProductFromCart,
  updateProductInCart
} from "../../store/actions/cart.actions";
import { cartProductsWithBonuses, totalPriceOfProductInCart } from "../../store/selectors/cart.selectors";

@Component({
  selector: 'course-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public title$ = this.activatedRoute.data.pipe(pluck('title'));
  public products$ = this.store.select(cartProductsWithBonuses);
  public totalPrice$ = this.store.select(totalPriceOfProductInCart);

  public constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<any>,
  ) {
  }

  public decrement(product: ICartProduct) {
    const {_id, count} = product;
    if (count === 1) {
      this.remove(product)
      return;
    }
    this.store.dispatch(updateProductInCart({_id, count: count - 1}))
  }

  public increment({_id, count}: ICartProduct) {
    this.store.dispatch(updateProductInCart({_id, count: count + 1}))
  }

  public remove({_id}: ICartProduct) {
    this.store.dispatch(removeProductFromCart({_id}))
  }

  public clear() {
    this.store.dispatch(removeAllProductsFromCart())
  }

  public trackById(_index: number, item: ICartProduct): string {
    return item._id;
  }
}
