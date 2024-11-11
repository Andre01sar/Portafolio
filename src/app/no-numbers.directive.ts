import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, Validator } from '@angular/forms';


@Directive({
  selector: '[appNoNumbers]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NoNumbersDirective, multi: true }]

})
export class NoNumbersDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    return nameRegex.test(control.value) ? null : { noNumbers: true };
  }

}
