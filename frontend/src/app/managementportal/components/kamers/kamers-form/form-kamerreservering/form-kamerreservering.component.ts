import { Component, OnInit, Input } from '@angular/core';
import { KamerReservering } from 'src/app/models/kamerreservering';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { KamerReserveringFormGroup } from './kamerreserveringformgroup';

@Component({
  selector: 'app-form-kamerreservering',
  templateUrl: './form-kamerreservering.component.html',
  styleUrls: ['./form-kamerreservering.component.scss']
})
export class FormKamerreserveringComponent implements OnInit {
  kamerreservering: KamerReservering | undefined = undefined;
  kamernaam: string = "";
  submitted = false;
  public kamerreserveringForm = new KamerReserveringFormGroup();

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {}

  ngOnInit() {
    if (this.kamerreservering) {
      this.kamerreserveringForm.setValue({
        voornaam: this.kamerreservering.voornaam,
        achternaam: this.kamerreservering.achternaam,
        telefoonnummer: this.kamerreservering.telefoonnummer,
        emailadres: this.kamerreservering.emailadres,
        identiteitsid: this.kamerreservering.identiteitsid,
        postcode: this.kamerreservering.postcode,
        straat: this.kamerreservering.straat,
        huisnummer: this.kamerreservering.huisnummer,
        woonplaats: this.kamerreservering.woonplaats,
        land: this.kamerreservering.land,
        datumvan: this.kamerreservering.datumvan,
        datumtot: this.kamerreservering.datumtot,
        kamernaam: this.kamerreservering.kamernaam
      });
    }
//    this.kamerreserveringForm.valueChanges.subscribe(console.log);
  }
  submitForm() {
    this.activeModal.close(this.kamerreserveringForm.value);
    console.log('onsubmit' + this.kamerreserveringForm.controls.voornaam)
  }
}
