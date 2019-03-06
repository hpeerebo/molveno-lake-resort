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
  kamernaam: string = ""

  public kamerreserveringForm = new KamerReserveringFormGroup();

 /*  public kamerreserveringForm = this.formBuilder.group({
    voornaam: ['', Validators.required],
    achternaam: ['', Validators.required],
    telefoonnummer: ['', Validators.required],
    emailadres: ['', Validators.required],

  }); */

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {}

  ngOnInit() {
    if (this.kamerreservering) {
      this.kamerreserveringForm.setValue({
        voornaam: this.kamerreservering.voornaam,
        achternaam: this.kamerreservering.achternaam,
        telefoonnummer: this.kamerreservering.telefoonnummer,
        emailadres: this.kamerreservering.emailadres
      });
    }
//    this.kamerreserveringForm.valueChanges.subscribe(console.log);
  }
  submitForm() {
    this.activeModal.close(this.kamerreserveringForm.value);
  }
  get voornaam() {
    return this.kamerreserveringForm.get('voornaam');
  }

}
