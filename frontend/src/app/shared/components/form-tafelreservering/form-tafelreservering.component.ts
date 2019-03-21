import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Tafelreservering } from 'src/app/models/tafelreservering';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { PickerHelper } from 'src/app/models/picker-helper';
import { debounceTime, tap, take } from 'rxjs/operators';
import { TafelreserveringenService } from 'src/app/services/tafelreserveringen.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-tafelreservering',
  templateUrl: './form-tafelreservering.component.html',
  styleUrls: ['./form-tafelreservering.component.scss']
})
export class FormTafelreserveringComponent implements OnInit, OnDestroy {

  @Input() tafelreservering: Tafelreservering | undefined = undefined;

  public minDate = PickerHelper.dateObject(new Date());
  public beschikbaar: number | undefined = undefined;
  private subscriptions = new Subscription();

  public tafelreserveringForm = this.formBuilder.group({
    aanvangsdatum: [PickerHelper.dateObject(new Date()), Validators.required],
    aanvangstijd: [{ hour: 17, minute: 0 }, Validators.required],
    personen: [undefined, [Validators.min(1), Validators.max(0)]],
    naam: [undefined, Validators.required],
    telefoon: [undefined, Validators.required]
  });

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private tafelreserveringenService: TafelreserveringenService
  ) { }

  ngOnInit() {
    if (this.tafelreservering) {
      this.tafelreserveringForm.setValue({
        aanvangsdatum: PickerHelper.dateObject(this.tafelreservering.aanvangstijd),
        aanvangstijd: PickerHelper.timeObject(this.tafelreservering.aanvangstijd),
        personen: this.tafelreservering.personen,
        naam: this.tafelreservering.naam,
        telefoon: this.tafelreservering.telefoon
      });
    }

    this.subscriptions.add(this.tafelreserveringForm.valueChanges
      .pipe(
        debounceTime(500),
        tap(value => this.handleReservationDateChanges(PickerHelper.toDate(value.aanvangsdatum, value.aanvangstijd)))
      )
      .subscribe()
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  handleReservationDateChanges(reservationDate: Date): void {
    this.tafelreserveringenService.checkReservation(reservationDate)
      .pipe(
        take(1),
        tap(data => this.beschikbaar = data.beschikbaar),
        tap(data => this.tafelreserveringForm.controls.personen.setValidators([Validators.min(1), Validators.max(data.beschikbaar)]))
      )
      .subscribe()
  }

  submitForm() {
    if (this.tafelreservering) {
      this.tafelreservering.aanvangstijd = PickerHelper.toDate(this.tafelreserveringForm.value.aanvangsdatum, this.tafelreserveringForm.value.aanvangstijd);
      this.tafelreservering.personen = this.tafelreserveringForm.value.personen;
      this.tafelreservering.naam = this.tafelreserveringForm.value.naam;
      this.tafelreservering.telefoon = this.tafelreserveringForm.value.telefoon;
      this.activeModal.close(this.tafelreservering);

    } else {
      this.activeModal.close(new Tafelreservering(
        PickerHelper.toDate(this.tafelreserveringForm.value.aanvangsdatum, this.tafelreserveringForm.value.aanvangstijd),
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
