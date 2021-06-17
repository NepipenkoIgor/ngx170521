import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./shared/auth/auth.guard";
import { PreloadService } from "./preload.service";


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'backoffice',
    loadChildren: () => import('./content/backoffice/backoffice.module').then((m) => m.BackofficeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./content/login/login.module').then((m) => m.LoginModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./content/signup/signup.module').then((m) => m.SignupModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadService})
  ],
  providers: [AuthGuard, PreloadService],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
