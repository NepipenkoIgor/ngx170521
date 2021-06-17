import { Component } from '@angular/core';

@Component({
  selector: 'course-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public login(user: any) {
    console.log(user);
  }
}
