import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActiviteitenPlanning } from 'src/app/models/activiteit-planning';
import { ActiviteitenPlanningService } from 'src/app/services/activiteiten-planning.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormActiviteitMaakReserveringComponent } from 'src/app/shared/components/form-activiteit-maak-reservering/form-activiteit-maak-reservering.component';
import { ActiviteitenResService } from 'src/app/services/activiteiten-res.service';
import { Activiteit } from 'src/app/models/activiteit';

@Component({
  selector: 'app-activiteiten-planning-reserveren',
  templateUrl: './activiteiten-planning-reserveren.component.html',
  styleUrls: ['./activiteiten-planning-reserveren.component.scss']
})
export class ActiviteitenPlanningReserverenComponent implements OnInit {
  public activiteitenPlanningen: Observable<
  ActiviteitenPlanning[]
> = this.activiteitenPlanningService.getAllActiviteitenPlanning();

  constructor(
    private activiteitenPlanningService: ActiviteitenPlanningService,
    private activiteitenResService: ActiviteitenResService,
    private modalService: NgbModal
  ) { }
  openCreateReserveringModal(activiteitenPlanning: ActiviteitenPlanning) {
    const modal = this.modalService.open(
      FormActiviteitMaakReserveringComponent
    );
    modal.componentInstance.planning = activiteitenPlanning;

    modal.result
      .then(result => {
        console.log(result);
        this.activiteitenResService.saveActiviteitRes(
          result,
          activiteitenPlanning.planid
        );
      })
      .catch(error => {
        console.log(error);
      });
  }

  ngOnInit() {
  }

}
