import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICartProduct } from "../../../store/reducers/cart.reducers";

@Component({
  selector: 'course-one-product-in-cart',
  templateUrl: './one-product-in-cart.component.html',
  styleUrls: ['./one-product-in-cart.component.css']
})
export class OneProductInCartComponent {

  @Input()
  public product!: ICartProduct

  @Output()
  public increment = new EventEmitter()

  @Output()
  public decrement = new EventEmitter()

  @Output()
  public remove = new EventEmitter()

  public decrementProduct(){
    this.decrement.emit();
  }

  public incrementProduct(){
    this.increment.emit();
  }

  public removeProduct(){
    this.remove.emit();
  }

}
