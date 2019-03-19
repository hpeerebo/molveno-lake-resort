import { Component, OnInit, Input } from '@angular/core';
import { Tafelreservering } from 'src/app/models/tafelreservering';
import { NgbActiveModal, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { PickerHelper } from 'src/app/models/picker-helper';

@Component({
  selector: 'app-form-tafelreservering',
  templateUrl: './form-tafelreservering.component.html',
  styleUrls: ['./form-tafelreservering.component.scss']
})
export class FormTafelreserveringComponent implements OnInit {

  minDate = PickerHelper.dateObject(new Date());

  @Input() tafelreservering: Tafelreservering | undefined = undefined;

  public tafelreserveringForm = this.formBuilder.group({
    aanvangsdatum: [PickerHelper.dateObject(new Date()), Validators.required],
    aanvangstijd: [PickerHelper.timeObject(new Date()), Validators.required],
    personen: [0, [Validators.min(1), Validators.max(40)]],
    naam: ['', Validators.required],
    telefoon: ['', Validators.required]
  });

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private calendar: NgbCalendar,
  ) { }

  ngOnInit() {
    if (this.tafelreservering) {
      this.tafelreserveringForm.setValue({
        aanvangsdatum: PickerHelper.dateObject(new Date(this.tafelreservering.aanvangstijd)),
        aanvangstijd: PickerHelper.timeObject(new Date(this.tafelreservering.aanvangstijd)),
        personen: this.tafelreservering.personen,
        naam: this.tafelreservering.naam,
        telefoon: this.tafelreservering.telefoon
      });
    }
  }

  submitForm() {
    if (this.tafelreservering) {
      this.tafelreservering.aanvangstijd = PickerHelper.toISOString(this.tafelreserveringForm.value.aanvangsdatum, this.tafelreserveringForm.value.aanvangstijd);
      this.tafelreservering.personen = this.tafelreserveringForm.value.personen;
      this.tafelreservering.naam = this.tafelreserveringForm.value.naam;
      this.tafelreservering.telefoon = this.tafelreserveringForm.value.telefoon;
      this.activeModal.close(this.tafelreservering);

    } else {
      this.activeModal.close(new Tafelreservering(
        PickerHelper.toISOString(this.tafelreserveringForm.value.aanvangsdatum, this.tafelreserveringForm.value.aanvangstijd),
        this.tafelreserveringForm.value.personen,
        this.tafelreserveringForm.value.naam,
        this.tafelreserveringForm.value.telefoon
      ));
    }

  }

  get aanvangsdatum() {
    return this.tafelreserveringForm.get('aanvangsdatum');
  }

  get personen() {
    return this.tafelreserveringForm.get('personen');
  }

  get naam() {
    return this.tafelreserveringForm.get('naam');
  }

  get telefoon() {
    return this.tafelreserveringForm.get('telefoon');
  }

}
