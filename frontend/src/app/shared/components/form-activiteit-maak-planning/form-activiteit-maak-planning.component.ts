import { Component, OnInit, Input } from '@angular/core';
import { Activiteit } from 'src/app/models/activiteit';
import { Validators, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActiviteitenPlanning } from 'src/app/models/activiteit-planning';

@Component({
  selector: 'app-form-activiteit-maak-planning',
  templateUrl: './form-activiteit-maak-planning.component.html',
  styleUrls: ['./form-activiteit-maak-planning.component.scss']
})
export class FormActiviteitMaakPlanningComponent implements OnInit {
  @Input() activiteit: Activiteit | undefined = undefined;
  @Input() activiteitenplanning: ActiviteitenPlanning | undefined = undefined;

  public activiteitenMaakPlanningForm = this.formBuilder.group({
    actNaam: [undefined],
    actdate: ["", Validators.required],
    actprijs: [0, [Validators.required, Validators.min(1)]],
    actcapaciteit: [0, [Validators.required, Validators.min(1)]],
    planid: [0, Validators.required],
  });



  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    if (this.activiteitenplanning) {
      this.activiteitenMaakPlanningForm.controls.actNaam.setValue(
        this.activiteitenplanning.activiteit.naam
      );
      this.activiteitenMaakPlanningForm.controls.actDate.setValue(
        this.activiteitenplanning.actdate
      );
      this.activiteitenMaakPlanningForm.controls.actprijs.setValue(
        this.activiteitenplanning.actprijs
      );
      this.activiteitenMaakPlanningForm.controls.actcapaciteit.setValue(
        this.activiteitenplanning.actcapaciteit
      );
      this.activiteitenMaakPlanningForm.controls.planid.setValue(
        this.activiteitenplanning.planid
      );
    }
  }

  submitForm() {
    console.log("submitForm", this.activiteitenMaakPlanningForm.value);
    this.activeModal.close(this.activiteitenMaakPlanningForm.value);
  }

  get naam() {
    return this.activiteitenMaakPlanningForm.get("actdate");
  }

  get beschrijving() {
    return this.activiteitenMaakPlanningForm.get("actprijs");
  }

  get thumb() {
    return this.activiteitenMaakPlanningForm.get("actcapaciteit");
  }
}
