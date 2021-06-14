import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { MatDrawer } from "@angular/material/sidenav";

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

  public toggle() {
    this.drawer.toggle();
  }

}
