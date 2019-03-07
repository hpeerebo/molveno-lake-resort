import { Component, OnInit, Input } from '@angular/core';
import { KamerReservering } from 'src/app/models/kamerreservering';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import {Kamerreserveringdetailsormgroup} from "./kamerreserveringdetailsormgroup";

@Component({
  selector: 'app-form-kamerreserveringdetails',
  templateUrl: './form-kamerreserveringdetails.component.html',
  styleUrls: ['./form-kamerreserveringdetails.component.scss']
})
export class FormKamerreserveringdetailsComponent implements OnInit {
  kamerreservering: KamerReservering | undefined = undefined;
  kamernaam: string = "";
  submitted = false;
  public kamerreserveringdetailsForm = new Kamerreserveringdetailsormgroup();

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {}


  ngOnInit() {
    if (this.kamerreservering) {
      this.kamerreserveringdetailsForm.setValue({
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
  }

  submitForm() {
    this.activeModal.close(new KamerReservering(
      this.kamerreserveringdetailsForm.value.id,
      this.kamerreserveringdetailsForm.value.voornaam,
      this.kamerreserveringdetailsForm.value.achternaam,
      this.kamerreserveringdetailsForm.value.telefoonnummer,
      this.kamerreserveringdetailsForm.value.emailadres,
      this.kamerreserveringdetailsForm.value.identiteitsid,
      this.kamerreserveringdetailsForm.value.postcode,
      this.kamerreserveringdetailsForm.value.straat,
      this.kamerreserveringdetailsForm.value.huisnummer,
      this.kamerreserveringdetailsForm.value.woonplaats,
      this.kamerreserveringdetailsForm.value.land,
      this.kamerreserveringdetailsForm.value.datumvan,
      this.kamerreserveringdetailsForm.value.datumtot,
      this.kamerreserveringdetailsForm.value.kamernaam
    ));
    location.reload();
  }
}
