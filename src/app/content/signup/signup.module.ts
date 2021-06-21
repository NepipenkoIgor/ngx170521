import { NgModule } from '@angular/core';
import { SignupComponent } from "./signup.component";
import { SharedModule } from "../../shared/shared.module";
import { SignupRoutingModule } from "./signup-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { SwitcherComponent } from './switcher/switcher.component';



@NgModule({
  declarations: [
    SignupComponent,
    SwitcherComponent
  ],
  imports: [
    SignupRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class SignupModule { }
