import { Component, OnInit } from '@angular/core';
import { pluck, switchMap, takeUntil } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "../products.service";
import { UnSubscriber } from "../../../../../shared/utils/unsubscriber";

@Component({
  selector: 'course-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent extends UnSubscriber implements OnInit {

  public title$ = this.activatedRoute.data.pipe(pluck('title'), takeUntil(this.getUnSubscriber()));
  public product$ = this.activatedRoute.params.pipe(
    pluck('id'),
    takeUntil(this.getUnSubscriber()),
    switchMap((id: string) => {
      return this.productsService.getOneProduct(id);
    }),
  );

  public constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly productsService: ProductsService,
  ) {
    super();
  }

  public ngOnInit(): void {
    console.log(this.activatedRoute)
  }

}
