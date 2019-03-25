import { Component, OnInit } from "@angular/core";
import { ActiviteitRes } from "src/app/models/activiteit-res";
import { Observable } from "rxjs";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormActiviteitResComponent } from "src/app/shared/components/form-activiteit-res/form-activiteit-res.component";
import { ModalConfirmComponent } from "src/app/shared/components/modal-confirm/modal-confirm.component";
import { ActiviteitenService } from "src/app/services/activiteiten.service";
import { ActiviteitenPlanningService } from "src/app/services/activiteiten-planning.service";
import { ActiviteitenResService } from "src/app/services/activiteiten-res.service";

@Component({
  selector: "app-activiteit-reserveringen",
  templateUrl: "./activiteit-reserveringen.component.html",
  styleUrls: ["./activiteit-reserveringen.component.scss"]
})
export class ActiviteitReserveringenComponent {
  public reserveringen: Observable<
    ActiviteitRes[]
  > = this.activiteitenResService.getAllActiviteitenRes();

  constructor(
    private activiteitenResService: ActiviteitenResService,
    private activiteitenPlanningService: ActiviteitenPlanningService,
    // private activiteitenService: ActiviteitenService,
    private modalService: NgbModal
  ) {}

  openFormActiviteitResModal(
    planningId: number,
    reserveringen?: ActiviteitRes
  ) {
    const modal = this.modalService.open(FormActiviteitResComponent);

    if (reserveringen) {
      modal.componentInstance.reserveringen = reserveringen;
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

  verwijderActiviteitRes(reservering: ActiviteitRes) {
    this.modalService
      .open(ModalConfirmComponent)
      .result.then(result => {
        if (result === "yes") {
          console.log(reservering);
          this.activiteitenResService.deleteActiviteitRes(reservering);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}
