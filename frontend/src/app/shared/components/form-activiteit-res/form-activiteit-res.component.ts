import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, Validators } from "@angular/forms";
import { Reservering } from "src/app/models/activiteit-res";

@Component({
  selector: "app-form-activiteit-res",
  templateUrl: "./form-activiteit-res.component.html",
  styleUrls: ["./form-activiteit-res.component.scss"]
})

export class FormActiviteitResComponent implements OnInit {
  @Input() reserveringen: Reservering | undefined = undefined;

  public activiteitResForm = this.formBuilder.group({
    naamActiviteit: ["", Validators.required],
    datum: [0, Validators.required],
    emailGast: ["", Validators.required],
    aantalPersonen: [1, [Validators.required, Validators.min(1)]],
  });

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    if (this.reserveringen) {
      this.activiteitResForm.setValue({
        naamActiviteit: this.reserveringen.naamActiviteit,
        datum: this.reserveringen.datum,
        emailGast: this.reserveringen.emailGast,
        aantalPersonen: this.reserveringen.aantalPersonen,
      });
    }
  }

  submitForm() {
    this.activeModal.close(this.activiteitResForm.value);
  }
  get naam() {
    return this.activiteitResForm.get("naamActiviteit");
  }
  get beschrijving() {
    return this.activiteitResForm.get("datum");
  }
  get datum() {
    return this.activiteitResForm.get("emailGast");
  }
  get capaciteit() {
    return this.activiteitResForm.get("aantalPersonen");
  }
}
