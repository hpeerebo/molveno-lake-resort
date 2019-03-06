import { FormGroup, FormControl } from '@angular/forms';

export class KamerReserveringFormGroup extends FormGroup{
  public static controls = {
    voornaam: new FormControl(undefined),
    achternaam: new FormControl(undefined),
    telefoonnummer: new FormControl(undefined),
    emailadres: new FormControl(undefined),
    identiteitsid: new FormControl(undefined),
    postcode: new FormControl(undefined),
    straat: new FormControl(undefined),
    huisnummer: new FormControl(undefined),
    woonplaats: new FormControl(undefined),
    land: new FormControl(undefined),
    datumvan: new FormControl(undefined),
    datumtot: new FormControl(undefined),
    kamernaam: new FormControl(undefined),
  };
  constructor(){
    super(KamerReserveringFormGroup.controls);
  }

}
