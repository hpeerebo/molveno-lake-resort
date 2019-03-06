import { FormGroup, FormControl } from '@angular/forms';

export class KamerReserveringFormGroup extends FormGroup{
  public static controls = {
    voornaam: new FormControl(undefined),
    achternaam: new FormControl(undefined),
  }
  constructor(){
    super(KamerReserveringFormGroup.controls);
  }

}
