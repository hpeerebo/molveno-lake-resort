import { Component, OnInit } from "@angular/core";
import { Reservering } from "src/app/models/activiteit-res";
import { Observable } from "rxjs";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActiviteitenResService } from 'src/app/services/activiteiten-res.service';
import { FormActiviteitResComponent } from 'src/app/shared/components/form-activiteit-res/form-activiteit-res.component';
import { ModalConfirmComponent } from 'src/app/shared/components/modal-confirm/modal-confirm.component';

@Component({
  selector: "app-activiteit-reserveringen",
  templateUrl: "./activiteit-reserveringen.component.html",
  styleUrls: ["./activiteit-reserveringen.component.scss"]
})
export class ActiviteitReserveringenComponent {
  public reserveringen: Observable<Reservering[] > = this.activiteitenService.getAllActiviteiten();

  constructor(
    private activiteitenService: ActiviteitenResService,
    private modalService: NgbModal
  ) {}

  openFormActiviteitResModal(reserveringen?: Reservering) {
    const modal = this.modalService.open(FormActiviteitResComponent);

    if (reserveringen) {
      modal.componentInstance.reserveringen = reserveringen;
    }

    modal.result
      .then(result => {
        this.activiteitenService.saveActiviteitRes(result);
      })
      .catch(error => {
        console.log(error);
      });
  }

  verwijderActiviteitRes(reserveringen: Reservering) {
    this.modalService
      .open(ModalConfirmComponent)
      .result.then(result => {
        if (result === "yes") {
          console.log(reserveringen);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}
