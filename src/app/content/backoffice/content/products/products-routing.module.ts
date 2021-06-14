import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./products.component";
import { OneProductComponent } from "./one-product/one-product.component";

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: OneProductComponent,
    data: {
      title: 'Product Page'
    }
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
