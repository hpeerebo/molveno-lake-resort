import { Component } from "@angular/core";
import { ActiviteitenService } from "src/app/services/activiteiten.service";
import { Observable } from "rxjs";
import { Activiteit } from "src/app/models/activiteit";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { FormActiviteitComponent } from "src/app/shared/components/form-activiteit/form-activiteit.component";
import { ModalConfirmComponent } from "src/app/shared/components/modal-confirm/modal-confirm.component";
import { ActiviteitReserveringenComponent } from "./activiteit-reserveringen/activiteit-reserveringen.component";

@Component({
  selector: "app-activiteiten",
  templateUrl: "./activiteiten.component.html",
  styleUrls: ["./activiteiten.component.scss"]
})
export class ManagementPortalActiviteitenComponent {
  public activiteiten: Observable<
    Activiteit[]
  > = this.activiteitenService.getAllActiviteiten();

  constructor(
    private activiteitenService: ActiviteitenService,
    private modalService: NgbModal
  ) {}

  openEditFormActiviteitModal(activiteit: Activiteit) {
    const modal = this.modalService.open(FormActiviteitComponent);
    modal.componentInstance.activiteit = activiteit;
    modal.result
      .then(result => {
        this.activiteitenService.updateActiviteit(result);
      })
      .catch(error => {
        console.log(error);
      });
  }

  openFormActiviteitModal(activiteit?: Activiteit) {
    const modal = this.modalService.open(FormActiviteitComponent);
    if (activiteit) {
      modal.componentInstance.activiteit = activiteit;
    }
    modal.result
      .then(result => {
        this.activiteitenService.saveActiviteit(result);
      })
      .catch(error => {
        console.log(error);
      });
  }

  verwijderActiviteit(activiteit: Activiteit) {
    this.modalService
      .open(ModalConfirmComponent)
      .result.then(result => {
        if (result === "yes") {
          this.activiteitenService.deleteActiviteit(activiteit);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}
