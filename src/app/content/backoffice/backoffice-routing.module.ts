import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BackofficeComponent } from "./backoffice.component";

export const routes: Routes = [
  {
    path: '',
    component: BackofficeComponent,
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      },
      {
        path: 'products',
        loadChildren: () => import('./content/products/products.module').then((m) => m.ProductsModule),
        data: {
          title: 'My Products Page'
        },
      },
      {
        path: 'cart',
        loadChildren: () => import('./content/cart/cart.module').then((m) => m.CartModule),
        data: {
          title: 'My Orders'
        }
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BackofficeRoutingModule {
}
