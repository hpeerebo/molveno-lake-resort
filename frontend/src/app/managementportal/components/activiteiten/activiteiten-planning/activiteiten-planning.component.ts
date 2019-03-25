import { Component, OnInit } from "@angular/core";
import { ActiviteitenPlanning } from "src/app/models/activiteit-planning";
import { Observable } from "rxjs";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalConfirmComponent } from "src/app/shared/components/modal-confirm/modal-confirm.component";
import { ActiviteitenPlanningService } from "src/app/services/activiteiten-planning.service";
import { ActiviteitenService } from "src/app/services/activiteiten.service";
import { FormActiviteitPlanningComponent } from "src/app/shared/components/form-activiteitplanning/form-activiteitplanning.component";
import { FormActiviteitMaakReserveringComponent } from "src/app/shared/components/form-activiteit-maak-reservering/form-activiteit-maak-reservering.component";

@Component({
  selector: "app-activiteiten-planning",
  templateUrl: "./activiteiten-planning.component.html",
  styleUrls: ["./activiteiten-planning.component.scss"]
})
export class ActiviteitenPlanningComponent {
  public activiteitenPlanning: Observable<
    ActiviteitenPlanning[]
  > = this.activiteitenPlanningService.getAllActiviteitenPlanning();

  constructor(
    private activiteitenPlanningService: ActiviteitenPlanningService,
    private activiteitenService: ActiviteitenService,
    private modalService: NgbModal
  ) {}

  openCreateReserveringModal(reservering: ActiviteitenPlanning) {
    console.log("openCreateReserveringModal", reservering);
    const modal = this.modalService.open(
      FormActiviteitMaakReserveringComponent
    );
    modal.componentInstance.reservering = reservering;
    modal.result
      .then(result => {
        console.log(result);
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

  openFormActiviteitPlanningModal(planning?: ActiviteitenPlanning) {
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

  verwijderActiviteitPlanning(planning: ActiviteitenPlanning) {
    this.modalService
      .open(ModalConfirmComponent)
      .result.then(result => {
        if (result === "yes") {
          console.log(planning);
          this.activiteitenPlanningService.deleteActiviteitPlanning(planning);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}
