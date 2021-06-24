import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { MatDrawer } from "@angular/material/sidenav";
import { Store } from "@ngrx/store";
import { totalProductsCount } from "../store/reducers/cart.reducers";

@Component({
  selector: 'course-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HeaderComponent {

  @Input()
  public myTitle!: { text: string };

  @Input()
  public drawer!: MatDrawer;

  public productsCount$ = this.state.select(totalProductsCount)

  public constructor(
    public readonly state: Store<any>
  ) {
  }

  public toggle() {
    this.drawer.toggle();
  }

}
