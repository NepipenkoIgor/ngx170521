import { NgModule } from '@angular/core';
import { BackofficeComponent } from './backoffice.component';
import { SharedModule } from "../../shared/shared.module";
import { HeaderComponent } from "./header/header.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { ExchangeRatesComponent } from "./header/exchange-rates/exchange-rates.component";
import { ExchangeRatesDirective } from "./header/exchange-rates/exchange-rates.directive";
import { HiddenDirective } from "./header/exchange-rates/hidden.directive";
import { ProductsService } from "./content/products/products.service";
import { BackofficeRoutingModule } from "./backoffice-routing.module";


@NgModule({
  declarations: [
    BackofficeComponent,
    HeaderComponent,
    SidenavComponent,
    ExchangeRatesComponent,
    ExchangeRatesDirective,
    HiddenDirective,
  ],
  imports: [
    BackofficeRoutingModule,
    SharedModule,
  ],
  providers: [
    ProductsService,
  ]
})
export class BackofficeModule {
}
