import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { CommonModule } from "@angular/common";
import { WithoutSpecialSymbolsDirective } from './validators/without-special-symbols.directive';
import { MatBadgeModule } from "@angular/material/badge";

const declarations = [
  WithoutSpecialSymbolsDirective
];

@NgModule({
  declarations,
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatBadgeModule,
    ...declarations
  ],
})
export class SharedModule {
  public static forAppRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}
