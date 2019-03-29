import { Component, OnInit, Input } from "@angular/core";
import { ActiviteitenPlanning } from "src/app/models/activiteit-planning";
import { Validators, FormBuilder } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Activiteit } from "src/app/models/activiteit";

@Component({
  selector: "app-form-activiteitplanning",
  templateUrl: "./form-activiteitplanning.component.html",
  styleUrls: ["./form-activiteitplanning.component.scss"]
})
export class FormActiviteitPlanningComponent implements OnInit {
  @Input() activiteitenPlanning: ActiviteitenPlanning | undefined = undefined;
  @Input() activiteiten: Activiteit | undefined = undefined;

  public activiteitenPlanningForm = this.formBuilder.group({
    actNaam: [undefined],
    actDate: ["", Validators.required],
    actPrijs: [0, [Validators.required, Validators.min(1)]],
    actCapaciteit: [0, [Validators.required, Validators.min(1)]],
    planid: [0, Validators.required],
  });

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    // console.log('result', this.activiteitenPlanning);
    if (this.activiteitenPlanning) {
      this.activiteitenPlanningForm.controls.actNaam.setValue(
        this.activiteitenPlanning.activiteit.naam
      );
      this.activiteitenPlanningForm.controls.actCapaciteit.setValue(
        this.activiteitenPlanning.actCapaciteit
      );
      this.activiteitenPlanningForm.controls.actDate.setValue(
        this.activiteitenPlanning.actDate
      );
      this.activiteitenPlanningForm.controls.actPrijs.setValue(
        this.activiteitenPlanning.actPrijs
      );
      this.activiteitenPlanningForm.controls.planid.setValue(
        this.activiteitenPlanning.planid
      );
    }
  }

  submitForm() {
    this.activeModal.close(this.activiteitenPlanningForm.value);
  }
  get actDate() {
    return this.activiteitenPlanningForm.get("actDate");
  }
  get actPrijs() {
    return this.activiteitenPlanningForm.get("actPrijs");
  }
  get actCapaciteit() {
    return this.activiteitenPlanningForm.get("actCapaciteit");
  }
}
