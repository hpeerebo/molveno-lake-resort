import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, Validators } from "@angular/forms";
import { ActiviteitReservering } from "src/app/models/activiteit-reservering";
import { ActiviteitenPlanning } from 'src/app/models/activiteit-planning';

@Component({
  selector: "app-form-activiteit-res",
  templateUrl: "./form-activiteit-res.component.html",
  styleUrls: ["./form-activiteit-res.component.scss"]
})
export class FormActiviteitResComponent implements OnInit {
  @Input() reservering: ActiviteitReservering | undefined = undefined;

  public activiteitResForm = this.formBuilder.group({
    emailGast: [undefined, [Validators.required, Validators.email]],
    phoneGast: [undefined],
    aantalPersonen: [1, [Validators.required, Validators.min(1)]],
    actNaam: [undefined],
    actDate: [undefined],
    resid: [undefined],
  });



  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    console.log(this.reservering)
    if (this.reservering) {
      this.activiteitResForm.controls.actNaam.setValue(
        this.reservering.planning.activiteit.naam
      );
      this.activiteitResForm.controls.actDate.setValue(
        this.reservering.planning.actDate
      );
      this.activiteitResForm.controls.emailGast.setValue(
        this.reservering.emailGast
      );
      this.activiteitResForm.controls.phoneGast.setValue(
        this.reservering.phoneGast
      );
      this.activiteitResForm.controls.aantalPersonen.setValue(
        this.reservering.aantalPersonen
      );
      this.activiteitResForm.controls.resid.setValue(
        this.reservering.resid
      );
    }
  }


  submitForm() {
    console.log("submitForm", this.activiteitResForm.value);
    this.activeModal.close(this.activiteitResForm.value);
  }

  get emailGast() {
    return this.activiteitResForm.get("emailGast");
  }

  get phoneGast() {
    return this.activiteitResForm.get("phoneGast");
  }

  get aantalPersonen() {
    return this.activiteitResForm.get("aantalPersonen");
  }
}
