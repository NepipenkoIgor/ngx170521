import { Component, Input } from '@angular/core';
import { IProduct } from "../products.service";
import { ModalService } from "../../../../../modal/modal.service";
import { Store } from "@ngrx/store";
import { updateProduct } from "../store/actions/products.actions";
import { addProductToCart } from "../../../store/actions/cart.actions";

@Component({
  selector: 'course-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  // providers: [{
  //   provide: ProductsService, useClass: ProductsService
  // }]
})
export class ProductCardComponent {

  @Input()
  public product!: IProduct;

  @Input()
  public isOdd!: boolean;

  public constructor(
    private modalService: ModalService,
    private store: Store<any>,
  ) {
  }

  public toggleIsFavorite() {
    this.store.dispatch(updateProduct({product: {...this.product, isFavorite: !this.product.isFavorite}}))
  }

  public async addToCart(): Promise<void> {
    const m = await import('./confirm-product/confirm-product.component');
    this.modalService.open({
      component: m.ConfirmProductComponent,
      context: {
        product: {...this.product},
        save: () => {
          console.log('Save');
          this.store.dispatch(addProductToCart({product: {...this.product}}))
          this.modalService.close();
        },
        close: () => {
          console.log('close');
          this.modalService.close();
        }
      }
    });
  }
}
