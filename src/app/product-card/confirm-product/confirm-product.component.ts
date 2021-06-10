import { Component, NgModule, OnDestroy } from '@angular/core';
import { IProduct } from "../../products.service";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'course-confirm-product',
  templateUrl: './confirm-product.component.html',
  styleUrls: ['./confirm-product.component.css']
})
export class ConfirmProductComponent implements OnDestroy {

  public product!: IProduct;

  public save!: Function;
  public close!: Function;

  public ngOnDestroy(): void {
    console.log('Destroyed')
  }

}

@NgModule({
  declarations: [ConfirmProductComponent],
  imports: [MatCardModule, MatButtonModule]
})
export class ConfirmProductModule {

}
