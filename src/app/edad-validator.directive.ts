import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appEdadValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EdadValidatorDirective,
    multi: true
  }]
})

export class EdadValidatorDirective {

  constructor() { }
  validate(control: AbstractControl) : {[key: string] : any} | null {
    if(control.value < 0 || control.value > 125) {
      return { 'edadInvalid': true };
    } 
    return null;
  }

}
