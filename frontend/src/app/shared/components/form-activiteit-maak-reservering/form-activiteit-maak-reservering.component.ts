import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, Validators } from "@angular/forms";
import { Activiteit } from "src/app/models/activiteit";
import { ActiviteitenPlanning } from "src/app/models/activiteit-planning";

@Component({
  selector: "app-form-activiteit-maak-reservering",
  templateUrl: "./form-activiteit-maak-reservering.component.html",
  styleUrls: ["./form-activiteit-maak-reservering.component.scss"]
})
export class FormActiviteitMaakReserveringComponent implements OnInit {
  @Input() planning: ActiviteitenPlanning | undefined = undefined;
  @Input() activiteit: Activiteit | undefined = undefined;

  private activiteitMaakResForm = this.formBuilder.group({
    actNaam: [""],
    actDate: [""],
    actGastMail: ["", [Validators.required, Validators.email]],
    actGastPhone: [""],
    actGastAantal: [1, [Validators.required, Validators.min(1)]]
  });

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    console.log("ngOninit form-activiteit-maak-reservering-component");
    if (this.planning) {
      console.log("ngOninit planning bestaat", this.planning);
      if (this.activiteit) {
        console.log("ngOninit activiteit bestaat", this.activiteit);
        this.activiteitMaakResForm.setValue({
          actnNaam: this.activiteit.naam,
          actDate: this.planning.actdate
        });
      } else {
        console.log("geen activiteit");
      }
    } else {
      console.log("geen planning");
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
