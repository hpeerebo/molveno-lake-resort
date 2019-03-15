import { Component, OnInit } from '@angular/core';
import { GastKamerReservering } from '../../models/gast-kamerreservering';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { GastKamerReserveringFormGroup } from './gast-kamerreserveringformgroup';

@Component({
  selector: 'app-gast-kamerreservering',
  templateUrl: './gast-kamerreservering.component.html',
  styleUrls: ['./gast-kamerreservering.component.scss']
})
export class GastKamerReserveringComponent implements OnInit {
  gastkamerreservering: GastKamerReservering | undefined = undefined;
  kamernaam: string = "";
  submitted = false;
  public kamerreserveringForm = new GastKamerReserveringFormGroup();

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder,  private modalService: NgbModal) {}


  ngOnInit() {
    if (this.gastkamerreservering) {
      this.kamerreserveringForm.setValue({
        voornaam: this.gastkamerreservering.voornaam,
        achternaam: this.gastkamerreservering.achternaam,
        telefoonnummer: this.gastkamerreservering.telefoonnummer,
        emailadres: this.gastkamerreservering.emailadres,
        postcode: this.gastkamerreservering.postcode,
        straat: this.gastkamerreservering.straat,
        huisnummer: this.gastkamerreservering.huisnummer,
        woonplaats: this.gastkamerreservering.woonplaats,
        land: this.gastkamerreservering.land,
        datumvan: this.gastkamerreservering.datumvan,
        datumtot: this.gastkamerreservering.datumtot,
        kamernaam: this.gastkamerreservering.kamernaam
      });
    }
  }

  submitForm() {
    this.activeModal.close(new GastKamerReservering(
      this.kamerreserveringForm.value.id,
      this.kamerreserveringForm.value.voornaam,
      this.kamerreserveringForm.value.achternaam,
      this.kamerreserveringForm.value.telefoonnummer,
      this.kamerreserveringForm.value.emailadres,
      this.kamerreserveringForm.value.postcode,
      this.kamerreserveringForm.value.straat,
      this.kamerreserveringForm.value.huisnummer,
      this.kamerreserveringForm.value.woonplaats,
      this.kamerreserveringForm.value.land,
      this.kamerreserveringForm.value.datumvan,
      this.kamerreserveringForm.value.datumtot,
      this.kamerreserveringForm.value.kamernaam
    ));
    location.reload();
  }

}
