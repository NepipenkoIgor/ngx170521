import { Component } from '@angular/core';
import { MatDrawer } from "@angular/material/sidenav";
import { Router } from "@angular/router";

@Component({
  selector: 'course-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent {
  public drawer!: MatDrawer;
  public title = {text: 'ngx170521 AWESOME'};

  public constructor(
    private router: Router,
  ) {
    // console.log(this.productsService)
    this.router.events
      .pipe(
        // filter((e: Event): e is NavigationStart => e instanceof NavigationStart),
        // filter((e: NavigationStart) => e.id === 1)
      )
      .subscribe((v) => {
        console.log(v);
      })
  }

  public setSideNav(drawer: MatDrawer) {
    this.drawer = drawer;
  }


}
