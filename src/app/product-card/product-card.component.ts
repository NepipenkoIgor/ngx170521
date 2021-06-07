import { Component, Host, Input } from '@angular/core';
import { IProduct, ProductsService } from "../products.service";

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
    @Host() private readonly productsService: ProductsService
  ) {
    console.log(this.productsService);
  }

  public toggleIsFavorite() {
    this.product.isFavorite = !this.product.isFavorite
  }
}
