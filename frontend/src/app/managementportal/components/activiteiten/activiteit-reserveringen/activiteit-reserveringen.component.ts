import { Component, OnInit } from "@angular/core";
import { ActiviteitReservering } from "src/app/models/activiteit-reservering";
import { Observable } from "rxjs";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormActiviteitResComponent } from "src/app/shared/components/form-activiteit-res/form-activiteit-res.component";
import { ModalConfirmComponent } from "src/app/shared/components/modal-confirm/modal-confirm.component";
import { ActiviteitenPlanningService } from "src/app/services/activiteiten-planning.service";
import { ActiviteitenResService } from "src/app/services/activiteiten-res.service";

@Component({
  selector: "app-activiteit-reserveringen",
  templateUrl: "./activiteit-reserveringen.component.html",
  styleUrls: ["./activiteit-reserveringen.component.scss"]
})
export class ActiviteitReserveringenComponent {
  public reserveringen$: Observable<
    ActiviteitReservering[]
  > = this.activiteitenResService.getAllActiviteitenRes();

  public field: string = "";
  public show: string = "";


  constructor(
    private activiteitenResService: ActiviteitenResService,
    private modalService: NgbModal
  ) {}

  public clickColumnHandler(event: string): string {
    this.field = event;
    return this.field;
  }

  openFormUpdateActiviteitRes(reservering: ActiviteitReservering) {
    console.log('UpdateRes Reservering', reservering)
    const modal = this.modalService.open(FormActiviteitResComponent);
    modal.componentInstance.reservering = reservering;
    modal.result
      .then(result => {
        console.log('UpdateRes Result', result)
        this.activiteitenResService.updateReservering(result);
      })

      .catch(error => {
        console.log(error);
      });
  }

  openFormActiviteitResModal(
    planningId: number,
    reservering?: ActiviteitReservering
  ) {
    const modal = this.modalService.open(FormActiviteitResComponent);
    if (reservering) {
      modal.componentInstance.reservering = reservering;
    }

    modal.result
      .then(result => {
        console.log("Result", result);
        this.activiteitenResService.updateReservering(result);
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
