import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, Validators } from "@angular/forms";
import { ActiviteitRes } from "src/app/models/activiteit-res";

@Component({
  selector: "app-form-activiteit-res",
  templateUrl: "./form-activiteit-res.component.html",
  styleUrls: ["./form-activiteit-res.component.scss"]
})
export class FormActiviteitResComponent implements OnInit {
  @Input() reserveringen: ActiviteitRes | undefined = undefined;

  public activiteitResForm = this.formBuilder.group({
    id: [0, Validators.required],
    naamActiviteit: ["", Validators.required],
    datum: ["", Validators.required],
    emailGast: ["", Validators.required],
    aantalPersonen: [1, [Validators.required, Validators.min(1)]]
  });

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    if (this.reserveringen) {
      this.activiteitResForm.setValue({
        id: this.reserveringen.id,
        naamActiviteit: this.reserveringen.naamActiviteit,
        datum: this.reserveringen.datum,
        emailGast: this.reserveringen.emailGast,
        aantalPersonen: this.reserveringen.aantalPersonen
      });
    }
  }

  submitForm() {
    this.activeModal.close(this.activiteitResForm.value);
  }
  get naamActiviteit() {
    return this.activiteitResForm.get("naamActiviteit");
  }
  get datum() {
    return this.activiteitResForm.get("datum");
  }
  get emailGast() {
    return this.activiteitResForm.get("emailGast");
  }
  get aantalPersonen() {
    return this.activiteitResForm.get("aantalPersonen");
  }
}
