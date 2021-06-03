import { Component, Input } from '@angular/core';
import { IProduct } from "../products";

@Component({
  selector: 'course-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input()
  public product!: IProduct;

  @Input()
  public isOdd!: boolean;

  public toggleIsFavorite() {
    this.product.isFavorite = !this.product.isFavorite
  }
}
