import { Component, OnInit } from "@angular/core";
import { ActiviteitReservering } from "src/app/models/activiteit-reservering";
import { Observable } from "rxjs";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormActiviteitResComponent } from "src/app/shared/components/form-activiteit-res/form-activiteit-res.component";
import { ModalConfirmComponent } from "src/app/shared/components/modal-confirm/modal-confirm.component";
import { ActiviteitenService } from "src/app/services/activiteiten.service";
import { ActiviteitenPlanningService } from "src/app/services/activiteiten-planning.service";
import { ActiviteitenResService } from "src/app/services/activiteiten-res.service";
import { CreateActiviteitReservering } from 'src/app/models/create-activiteit-reservering';

@Component({
  selector: "app-activiteit-reserveringen",
  templateUrl: "./activiteit-reserveringen.component.html",
  styleUrls: ["./activiteit-reserveringen.component.scss"]
})
export class ActiviteitReserveringenComponent {
  public reserveringen: Observable<
    ActiviteitReservering[]
  > = this.activiteitenResService.getAllActiviteitenRes();

  constructor(
    private activiteitenResService: ActiviteitenResService,
    private activiteitenPlanningService: ActiviteitenPlanningService,
    private modalService: NgbModal
  ) {}

  openFormActiviteitResModal(
    planningId: number,
    reservering?: ActiviteitReservering
  ) {
    const modal = this.modalService.open(FormActiviteitResComponent);
console.log(reservering)
    if (reservering) {
      modal.componentInstance.reservering = reservering;
    }

    modal.result
      .then(result => {
        console.log("Result", result);
        this.activiteitenResService.saveActiviteitRes(result, planningId);
      })
      .catch(error => {
        console.log(error);
      });
  }

  verwijderActiviteitRes(reserveringId: number) {
    this.modalService
      .open(ModalConfirmComponent)
      .result.then(result => {
        if (result === "yes") {
          this.activiteitenResService.deleteActiviteitRes(reserveringId);
      }})
      .catch(error => {
        console.log(error);
      });
  }
}
