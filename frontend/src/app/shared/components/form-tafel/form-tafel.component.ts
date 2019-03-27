import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { Tafel } from 'src/app/models/tafel';

@Component({
  selector: 'app-form-tafel',
  templateUrl: './form-tafel.component.html',
  styleUrls: ['./form-tafel.component.scss']
})
export class FormTafelComponent implements OnInit {

  @Input() tafel: Tafel | undefined = undefined;

  public tafelForm = this.formBuilder.group({
    kenmerk: [0, Validators.min(1)],
    personen: [0, [Validators.min(1), Validators.max(16)]]
  });

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.setInitialFormValues();
  }

  public submitForm() {
    if (this.tafel){
      this.tafel.kenmerk = this.tafelForm.value.kenmerk;
      this.tafel.personen = this.tafelForm.value.personen;
      this.activeModal.close(
        this.tafel
      )
    } else {
      this.activeModal.close(new Tafel(
        this.tafelForm.value.kenmerk,
        this.tafelForm.value.personen
      ));
    }
  }

  private setInitialFormValues() {
    if (this.tafel) {
      this.tafelForm.setValue({
        kenmerk: this.tafel.kenmerk,
        personen: this.tafel.personen
      });
    }
  }

  get kenmerk() {
    return this.tafelForm.get('kenmerk');
  }

  get personen() {
    return this.tafelForm.get('personen');
  }
}
