import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDrawer } from "@angular/material/sidenav";
import { ProductsService } from "../content/products/products.service";

@Component({
  selector: 'course-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  providers: [{
    provide: ProductsService, useClass: ProductsService
  }]
})
export class SidenavComponent implements OnInit {
  @ViewChild('drawer', {static: true})
  public drawer!: MatDrawer

  @Output()
  public setSideNavControl = new EventEmitter(true);

  public ngOnInit() {
    this.setSideNavControl.emit(this.drawer);
  }

}
