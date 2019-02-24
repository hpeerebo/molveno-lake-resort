import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-tafel',
  templateUrl: './form-tafel.component.html',
  styleUrls: ['./form-tafel.component.scss']
})
export class FormTafelComponent implements OnInit {

  public tafelsForm = this.formBuilder.group({
    tafelnummer: [0, Validators.min(1)],
    aantalPersonen: [0, [Validators.min(1), Validators.max(12)]]
  });

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  get tafelnummer() {
    return this.tafelsForm.get('tafelnummer');
  }

  get aantalPersonen() {
    return this.tafelsForm.get('aantalPersonen');
  }

}
