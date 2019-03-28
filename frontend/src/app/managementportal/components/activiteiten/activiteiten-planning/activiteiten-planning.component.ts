import { Component, NgModule } from "@angular/core";
import { ActiviteitenPlanning } from "src/app/models/activiteit-planning";
import { Observable } from "rxjs";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalConfirmComponent } from "src/app/shared/components/modal-confirm/modal-confirm.component";
import { ActiviteitenPlanningService } from "src/app/services/activiteiten-planning.service";
import { FormActiviteitPlanningComponent } from "src/app/shared/components/form-activiteitplanning/form-activiteitplanning.component";
import { FormActiviteitMaakReserveringComponent } from "src/app/shared/components/form-activiteit-maak-reservering/form-activiteit-maak-reservering.component";
import { ActiviteitenResService } from "src/app/services/activiteiten-res.service";
import { CreateActiviteitenPlanning } from 'src/app/models/create-activiteit-planning';


@Component({
  selector: "app-activiteiten-planning",
  templateUrl: "./activiteiten-planning.component.html",
  styleUrls: ["./activiteiten-planning.component.scss"]
})
export class ActiviteitenPlanningComponent {
  public activiteitenPlanningen: Observable<ActiviteitenPlanning[]> = this.activiteitenPlanningService.getAllActiviteitenPlanning();

  public field: string = "";
  public show: string = "";


  constructor(
    private activiteitenPlanningService: ActiviteitenPlanningService,
    private activiteitenResService: ActiviteitenResService,
    private modalService: NgbModal,
    ) {}

  // public clickColumnHandler(event: string): string {
  //   this.field = event;
  //   return this.field;
  // }

  openCreateReserveringModal(activiteitenPlanning: ActiviteitenPlanning) {
    console.log("Openen reserverings modal Marc");
    console.log(activiteitenPlanning);
    const modal = this.modalService.open(FormActiviteitMaakReserveringComponent);
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

  openEditFormActiviteitPlanningModal(planning: ActiviteitenPlanning) {
    const modal = this.modalService.open(FormActiviteitPlanningComponent);
    modal.componentInstance.planning = planning;
    modal.result
      .then(result => {
        this.activiteitenPlanningService.updateActiviteitPlanning(result);
      })
      .catch(error => {
        console.log(error);
      });
  }

  openFormActiviteitPlanningModal(planning?: CreateActiviteitenPlanning) {
    const modal = this.modalService.open(FormActiviteitPlanningComponent);
    if (planning) {
      modal.componentInstance.activiteit = planning;
    }
    modal.result
      .then(result => {
        this.activiteitenPlanningService.saveActiviteitPlanning(result);
      })
      .catch(error => {
        console.log(error);
      });
  }

  verwijderActiviteitPlanning(planid: number) {
      this.modalService
      .open(ModalConfirmComponent)
      .result.then(result => {
        if (result === "yes") {
          this.activiteitenPlanningService.deleteActiviteitPlanning(planid);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}
