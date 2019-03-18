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
  @Input() activiteitenplanning: ActiviteitenPlanning | undefined = undefined;

  public activiteitenPlanningForm = this.formBuilder.group({
    planid: [0, Validators.required],
    actid: [0, Validators.required],
    actdate: ["", Validators.required],
    actprijs: [0, [Validators.required, Validators.min(1)]],
    actcapaciteit: [0, [Validators.required, Validators.min(1)]]
  });

  @Input() activiteiten: Activiteit | undefined = undefined;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    if (this.activiteitenplanning) {
      this.activiteitenPlanningForm.setValue({
        planid: this.activiteitenplanning.planid,
        actid: this.activiteitenplanning.actid,
        actdate: this.activiteitenplanning.actdate,
        actprijs: this.activiteitenplanning.actprijs,
        actcapaciteit: this.activiteitenplanning.actcapaciteit
      });
    }
  }

  submitForm() {
    this.activeModal.close(this.activiteitenPlanningForm.value);
  }
  get actid() {
    return this.activiteitenPlanningForm.get("actid");
  }
  get actdate() {
    return this.activiteitenPlanningForm.get("actdate");
  }
  get actprijs() {
    return this.activiteitenPlanningForm.get("actprijs");
  }
  get actcapaciteit() {
    return this.activiteitenPlanningForm.get("actcapaciteit");
  }
}
