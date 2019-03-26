import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, Validators } from "@angular/forms";
import { ActiviteitenPlanning } from "src/app/models/activiteit-planning";

@Component({
  selector: "app-form-activiteit-maak-reservering",
  templateUrl: "./form-activiteit-maak-reservering.component.html",
  styleUrls: ["./form-activiteit-maak-reservering.component.scss"]
})
export class FormActiviteitMaakReserveringComponent implements OnInit {
  @Input() planning: ActiviteitenPlanning | undefined = undefined;

  public activiteitMaakResForm = this.formBuilder.group({
    emailGast: [undefined, [Validators.required, Validators.email]],
    phoneGast: [undefined],
    aantalPersonen: [1, [Validators.required, Validators.min(1)]],
    actGastPhone: [undefined],
    actPlanId: [undefined]
  });



  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    if (this.planning) {
      this.activiteitMaakResForm.controls.actDate.setValue(
        this.planning.actdate
      );
      this.activiteitMaakResForm.controls.actNaam.setValue(
        this.planning.activiteit.naam
      );
      this.activiteitMaakResForm.controls.actPlanId.setValue(
        this.planning.planid
      );
    }
  }

  submitForm() {
    console.log("submitForm", this.activiteitMaakResForm.value);
    this.activeModal.close(this.activiteitMaakResForm.value);
  }

  get naam() {
    return this.activiteitMaakResForm.get("emailGast");
  }

  get beschrijving() {
    return this.activiteitMaakResForm.get("phoneGast");
  }

  get thumb() {
    return this.activiteitMaakResForm.get("aantalPersonen");
  }
}
