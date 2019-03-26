import { Component, OnInit, Input } from '@angular/core';
import { KamerReservering } from 'src/app/models/kamerreservering';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { KamerReserveringFormGroup } from './kamerreserveringformgroup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-kamerreservering',
  templateUrl: './form-kamerreservering.component.html',
  styleUrls: ['./form-kamerreservering.component.scss']
})
export class FormKamerreserveringComponent implements OnInit {
  kamerreservering: KamerReservering | undefined = undefined;
  kamernaam: string = "";
  datumvan: string = "";
  datumtot: string = "";
  public kamerreserveringForm = new KamerReserveringFormGroup();

  constructor(public activeModal: NgbActiveModal, private router: Router) {}


  ngOnInit() {
  //deze code is eigenlijk overbodig. KamerReservering wordt meegegeven vanuit kamerreservering component
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
        kamernaam: this.kamerreservering.kamernaam,
        inchecken: this.kamerreservering.inchecken,
        uitchecken: this.kamerreservering.uitchecken,
        personen: this.kamerreservering.personen,
        prijs: this.kamerreservering.prijs,
        reserveringsnummer: this.kamerreservering.reserveringsnummer
      });
    }
  }

  submitForm() {
    this.activeModal.close(new KamerReservering(
      this.kamerreserveringForm.value.id,
      this.kamerreserveringForm.value.voornaam,
      this.kamerreserveringForm.value.achternaam,
      this.kamerreserveringForm.value.telefoonnummer,
      this.kamerreserveringForm.value.emailadres,
      this.kamerreserveringForm.value.identiteitsid,
      this.kamerreserveringForm.value.postcode,
      this.kamerreserveringForm.value.straat,
      this.kamerreserveringForm.value.huisnummer,
      this.kamerreserveringForm.value.woonplaats,
      this.kamerreserveringForm.value.land,
      this.datumvan,
      this.datumtot,
      this.kamerreserveringForm.value.kamernaam,
      this.kamerreserveringForm.value.inchecken,
      this.kamerreserveringForm.value.uitchecken,
      this.kamerreserveringForm.value.personen,
      this.kamerreserveringForm.value.prijs,
      this.kamerreserveringForm.value.reserveringsnummer,
    ));
    this.kamerreserveringForm.reset();
    this.router.navigateByUrl('managementportal/kamerreserveringen');
  }

}
