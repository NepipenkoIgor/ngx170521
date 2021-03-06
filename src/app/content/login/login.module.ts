import { NgModule } from '@angular/core';
import { LoginComponent } from "./login.component";
import { SharedModule } from "../../shared/shared.module";
import { LoginRoutingModule } from "./login-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    LoginRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class LoginModule {
}
