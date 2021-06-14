import { Component } from '@angular/core';
import { UnSubscriber } from "./shared/utils/unsubscriber";


@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends UnSubscriber {

}
