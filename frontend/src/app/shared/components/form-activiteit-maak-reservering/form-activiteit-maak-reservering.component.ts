import {Component, Input, OnInit} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, Validators} from "@angular/forms";
import {ActiviteitenPlanning} from "src/app/models/activiteit-planning";


@Component({
  selector: "app-form-activiteit-maak-reservering",
  templateUrl: "./form-activiteit-maak-reservering.component.html",
  styleUrls: ["./form-activiteit-maak-reservering.component.scss"]
})
export class FormActiviteitMaakReserveringComponent implements OnInit {
  @Input() planning: ActiviteitenPlanning | undefined = undefined;

  public activiteitMaakResForm = this.formBuilder.group({
    actNaam: [undefined],
    actDate: [undefined],
    actGastMail: [undefined, [Validators.required, Validators.email]],
    actGastPhone: [undefined],
    actGastAantal: [1, [Validators.required, Validators.min(1)]]
  });

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    if (this.planning) {
      console.log("PLANNING", this.planning);
      console.log("PLANNING DATE", this.planning.actdate);
      console.log("PLANNING NAME", this.planning.activiteit.naam);
      this.activiteitMaakResForm.controls.actDate.setValue(this.planning.actdate);
      this.activiteitMaakResForm.controls.actNaam.setValue(this.planning.activiteit.naam);
    }
  }

  submitForm() {
    this.activeModal.close(this.activiteitMaakResForm.value);
  }

  get naam() {
    return this.activiteitMaakResForm.get("actGastMail");
  }

  get beschrijving() {
    return this.activiteitMaakResForm.get("actGastPhone");
  }

  get thumb() {
    return this.activiteitMaakResForm.get("actGastAantal");
  }
}
