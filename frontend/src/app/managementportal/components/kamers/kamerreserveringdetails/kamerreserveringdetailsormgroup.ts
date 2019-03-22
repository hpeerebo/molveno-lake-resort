import { FormGroup, FormControl, Validators } from '@angular/forms';

export class KamerReserveringDetailsFormGroup extends FormGroup{
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
    datumvan: new FormControl('', Validators.required),
    datumtot: new FormControl('', Validators.required),
    kamernaam: new FormControl(undefined),
    inchecken: new FormControl(undefined),
    uitchecken: new FormControl(undefined),
    personen: new FormControl(undefined),
    prijs: new FormControl(undefined),
    reserveringsnummer: new FormControl(undefined),
  };
  constructor(){
    super(KamerReserveringDetailsFormGroup.controls);
  }

}
