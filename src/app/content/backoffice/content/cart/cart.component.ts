import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { pluck } from "rxjs/operators";

@Component({
  selector: 'course-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public title$ = this.activatedRoute.data.pipe(pluck('title'));

  public constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  public ngOnInit(): void {
    console.log(this.activatedRoute)
  }

}
