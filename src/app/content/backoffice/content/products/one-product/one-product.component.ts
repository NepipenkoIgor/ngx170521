import { Component } from '@angular/core';
import { pluck, takeUntil } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
import { UnSubscriber } from "../../../../../shared/utils/unsubscriber";

@Component({
  selector: 'course-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent extends UnSubscriber  {

  public title$ = this.activatedRoute.data.pipe(pluck('title'), takeUntil(this.getUnSubscriber()));
  public product$ = this.activatedRoute.data.pipe(
    pluck('product'),
    takeUntil(this.getUnSubscriber())
  );

  public constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) {
    super();
  }

}
