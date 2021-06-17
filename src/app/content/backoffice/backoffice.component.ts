import { Component } from '@angular/core';
import { MatDrawer } from "@angular/material/sidenav";

@Component({
  selector: 'course-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent {
  public drawer!: MatDrawer;
  public title = {text: 'ngx170521 AWESOME'};

  public constructor(
  ) {
  }

  public setSideNav(drawer: MatDrawer) {
    this.drawer = drawer;
  }


}
