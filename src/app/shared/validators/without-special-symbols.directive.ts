import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";


// // TODO
// export const myProviders = [
//   {
//     provide: NG_VALIDATORS,
//     useExisting: forwardRef(() => WithoutSpecialSymbolsDirective),
//     multi: true
//   }
// ]

@Directive({
  selector: '[courseWithoutSpecialSymbols]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: WithoutSpecialSymbolsDirective,
    multi: true
  }]
})
export class WithoutSpecialSymbolsDirective implements Validator {
  public validate(control: AbstractControl): ValidationErrors | null {
    const valid = /^[a-zA-Z]*$/.test(control.value);
    return valid
      ? null
      : {
        withOutSpecial: 'Field should be without special symbols. $,%......'
      }
  }
}


