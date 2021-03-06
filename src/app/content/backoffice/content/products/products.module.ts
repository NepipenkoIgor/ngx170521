import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { SharedModule } from "../../../../shared/shared.module";
import { ProductsRoutingModule } from "./products-routing.module";
import { SearchComponent } from "./search/search.component";
import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductsFilterPipe } from "./products-filter.pipe";
import { OneProductComponent } from './one-product/one-product.component';
import { ProductResolverService } from "./one-product/product-resolver.service";
import { StoreModule } from "@ngrx/store";
import { productsReducer } from "./store/reducers/products.reducers";
import { EffectsModule } from "@ngrx/effects";
import { ProductsEffects } from "./store/effects/products.effects";



@NgModule({
  declarations: [
    ProductsComponent,
    SearchComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    OneProductComponent,
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule,
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([ProductsEffects])
  ],
  providers: [
    ProductResolverService
  ]
})
export class ProductsModule { }
