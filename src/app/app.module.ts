import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { environment } from "../environments/environment";
import { BASE_URL } from "./config";
import { ModalModule } from "./modal/modal.module";
import { AppRoutingModule } from "./app-routing.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthInterceptor } from "./shared/auth/auth.interceptor";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forAppRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot([], {
      runtimeChecks: {
        strictStateImmutability: false,
        strictStateSerializability: false,
        strictActionImmutability: false,
        strictActionSerializability: false
      }
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {provide: BASE_URL, useValue: {port: environment.port, domain: environment.domain}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
