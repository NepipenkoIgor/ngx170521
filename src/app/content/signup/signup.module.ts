import { NgModule } from '@angular/core';
import { SignupComponent } from "./signup.component";
import { SharedModule } from "../../shared/shared.module";
import { SignupRoutingModule } from "./signup-routing.module";



@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    SignupRoutingModule,
    SharedModule
  ]
})
export class SignupModule { }
