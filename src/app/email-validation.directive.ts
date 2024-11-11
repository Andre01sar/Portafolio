import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';


@Directive({
  selector: '[appEmailValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidationDirective, multi: true }]

})
export class EmailValidationDirective implements Validators{

  validate(control: AbstractControl): ValidationErrors | null {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const valid = emailRegex.test(control.value);
    return valid ? null : { invalidEmail: true }; // Retorna un error si el email es inválido
  }

 
}
