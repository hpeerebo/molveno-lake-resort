import { Component, OnInit, Input } from '@angular/core';
import { Tafelreservering } from 'src/app/models/tafelreservering';
import { NgbActiveModal, NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';

@Component({
  selector: 'app-form-tafelreservering',
  templateUrl: './form-tafelreservering.component.html',
  styleUrls: ['./form-tafelreservering.component.scss']
})
export class FormTafelreserveringComponent implements OnInit {

  public currentDate: NgbDate = this.calendar.getToday();
  public currentTime = {hour: 17, minute: 0};

  @Input() tafelreservering: Tafelreservering | undefined = undefined;

  public tafelreserveringForm = this.formBuilder.group({
    aanvangsdatum: [this.currentDate, Validators.required],
    aanvangstijd: [this.currentTime, Validators.required],
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
        aanvangstijd: this.tafelreservering.aanvangstijd,
        personen: this.tafelreservering.personen,
        naam: this.tafelreservering.naam,
        telefoon: this.tafelreservering.telefoon
      });
    }
  }

  submitForm() {
    if (this.tafelreservering) {
      this.tafelreservering.aanvangstijd = this.tafelreserveringForm.value.aanvangstijd;
      this.tafelreservering.personen = this.tafelreserveringForm.value.personen;
      this.tafelreservering.naam = this.tafelreserveringForm.value.naam;
      this.tafelreservering.telefoon = this.tafelreserveringForm.value.telefoon;
      this.activeModal.close(
        this.tafelreservering
      )
    } else {
      this.activeModal.close(new Tafelreservering(
        this.tafelreserveringForm.value.aanvangstijd,
        this.tafelreserveringForm.value.personen,
        this.tafelreserveringForm.value.naam,
        this.tafelreserveringForm.value.telefoon,
      ));
    }
  }

  get aanvangstijd() {
    return this.tafelreserveringForm.get('aanvangstijd');
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
