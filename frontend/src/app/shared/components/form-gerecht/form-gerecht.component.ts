import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { Gerecht } from 'src/app/models/gerecht';

@Component({
  selector: 'app-form-gerecht',
  templateUrl: './form-gerecht.component.html',
  styleUrls: ['./form-gerecht.component.scss']
})
export class FormGerechtComponent implements OnInit {
  @Input() gerecht: Gerecht | undefined = undefined;

  public gerechtForm = this.formBuilder.group({
    naam: ['', Validators.required],
    type: ['', Validators.required],
    subtype: ['', Validators.required],
    prijs: [0, Validators.min(0)]
  });

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (this.gerecht) {
      this.gerechtForm.setValue({
        naam: this.gerecht.naam,
        type: this.gerecht.type,
        subtype: this.gerecht.subtype,
        prijs: this.gerecht.prijs
      });
    }
  }

  submitForm() {
    if (this.gerecht) {
      this.gerecht.naam = this.gerechtForm.value.naam;
      this.gerecht.type = this.gerechtForm.value.type;
      this.gerecht.subtype = this.gerechtForm.value.subtype;
      this.gerecht.prijs = Number(this.gerechtForm.value.prijs); //Is dit de juiste manier???
      this.activeModal.close(
        this.gerecht
      )
    } else {
      this.activeModal.close(new Gerecht(
        this.gerechtForm.value.naam,
        this.gerechtForm.value.type,
        this.gerechtForm.value.subtype,
        this.gerechtForm.value.prijs
      ));
    }
  }

  get naam() {
    return this.gerechtForm.get('naam');
  }

  get type() {
    return this.gerechtForm.get('type');
  }

  get subtype() {
    return this.gerechtForm.get('subtype');
  }

  get prijs() {
    return this.gerechtForm.get('prijs');
  }
}
