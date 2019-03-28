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
    actDate: ["", Validators.required],
    actPrijs: [1, [Validators.required, Validators.min(1)]],
    actCapaciteit: [1, [Validators.required, Validators.min(1)]],
    actId: [undefined],
  });

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    if (this.activiteit) {
      this.activiteitenMaakPlanningForm.controls.actNaam.setValue(
        this.activiteit.naam
      );
      this.activiteitenMaakPlanningForm.controls.actId.setValue(
        this.activiteit.actid
      );
    }
  }

  submitForm() {
    console.log("submitForm", this.activiteitenMaakPlanningForm.value);
    this.activeModal.close(this.activiteitenMaakPlanningForm.value);
  }

  get actNaam() {
    return this.activiteitenMaakPlanningForm.get("actNaam");
  }

  get actDate() {
    return this.activiteitenMaakPlanningForm.get("actDate");
  }

  get actPrijs() {
    return this.activiteitenMaakPlanningForm.get("actPrijs");
  }
  get actCapaciteit() {
    return this.activiteitenMaakPlanningForm.get("actCapaciteit");
  }
}
