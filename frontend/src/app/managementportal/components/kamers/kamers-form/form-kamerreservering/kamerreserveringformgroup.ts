import { FormGroup, FormControl, Validators } from '@angular/forms';

export class KamerReserveringFormGroup extends FormGroup{
  public static controls = {
    voornaam: new FormControl('', Validators.required),
    achternaam: new FormControl('', Validators.required),
    telefoonnummer: new FormControl('', Validators.required),
    emailadres: new FormControl('', Validators.required),
    identiteitsid: new FormControl('', Validators.required),
    postcode: new FormControl('', Validators.required),
    straat: new FormControl('', Validators.required),
    huisnummer: new FormControl('', Validators.required),
    woonplaats: new FormControl('', Validators.required),
    land: new FormControl('', Validators.required),
    datumvan: new FormControl(undefined),
    datumtot: new FormControl(undefined),
    kamernaam: new FormControl(undefined),
  };
  constructor(){
    super(KamerReserveringFormGroup.controls);
  }

}
