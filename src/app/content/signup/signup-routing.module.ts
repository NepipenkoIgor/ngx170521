import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { SignupComponent } from "./signup.component";

export const routes: Routes = [
  {
    path: '',
    component: SignupComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SignupRoutingModule {
}
