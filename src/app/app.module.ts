import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { SearchComponent } from './search/search.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';
import { HiddenDirective } from './header/exchange-rates/hidden.directive';
import { ProductsService } from "./products.service";
import { environment } from "../environments/environment";
import { BASE_URL } from "./config";
// NgModule => es6
// declarations => let/const
// imports = import
// exports = export

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SidenavComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    ExchangeRatesComponent,
    ExchangeRatesDirective,
    HiddenDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forAppRoot()
  ],
  providers: [
    // {provide: ProductsService, useClass: ProductsService}
    ProductsService,
    {provide: BASE_URL, useValue: {port: environment.port, domain: environment.domain}},
    {provide: 'baseUrl', useValue: 'localhost: 3000'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
