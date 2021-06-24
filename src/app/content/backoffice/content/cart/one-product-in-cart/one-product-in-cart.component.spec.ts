import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatButtonModule } from "@angular/material/button";
import { By } from "@angular/platform-browser";
import { ICartProduct } from "../../../store/reducers/cart.reducers";
import { OneProductInCartComponent } from "./one-product-in-cart.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material/icon";

const product: ICartProduct = {
  author: "Vlad",
  img: "assets/img/product-2.jpg",
  isFavorite: false,
  price: 1111,
  title: "Prod 22222",
  _id: "60d4b0dbe27130bc9be48e94",
  count: 1
}

describe('One product in cart component', () => {

  let fixture: ComponentFixture<OneProductInCartComponent>;
  let component: OneProductInCartComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneProductInCartComponent],
      imports: [FlexLayoutModule, MatIconModule, MatButtonModule]
    })

    fixture = TestBed.createComponent(OneProductInCartComponent);
    component = fixture.componentInstance;
    component.product = product;
    fixture.detectChanges();

    spyOn(component.increment, 'emit')
      .and
      .callThrough()

    spyOn(component.decrement, 'emit')
      .and
      .callThrough()

    spyOn(component.remove, 'emit')
      .and
      .callThrough()

    spyOn(component, 'incrementProduct')
      .and
      .callThrough()

    spyOn(component, 'decrementProduct')
      .and
      .callThrough()

    spyOn(component, 'removeProduct')
      .and
      .callThrough()
  })

  it('should decrement', () => {
    const element: DebugElement = fixture.debugElement.query(By.css('.dec'));
    element.triggerEventHandler('click', {});
    expect(component.increment.emit).not.toHaveBeenCalled();
    expect(component.remove.emit).not.toHaveBeenCalled();
    expect(component.incrementProduct).not.toHaveBeenCalled();
    expect(component.removeProduct).not.toHaveBeenCalled();
    expect(component.decrement.emit).toHaveBeenCalled();
    expect(component.decrementProduct).toHaveBeenCalled();
  });
})
