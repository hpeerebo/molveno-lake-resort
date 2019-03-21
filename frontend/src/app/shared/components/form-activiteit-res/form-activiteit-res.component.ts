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
    resid: [0, Validators.required],
    planid: [0, Validators.required],
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
        resid: this.reserveringen.resid,
        // planid: this.reserveringen.planid,
        emailGast: this.reserveringen.emailGast,
        phoneGast: this.reserveringen.phoneGast,
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
  get phoneGast() {
    return this.activiteitResForm.get("phoneGast");
  }
  get aantalPersonen() {
    return this.activiteitResForm.get("aantalPersonen");
  }
}
