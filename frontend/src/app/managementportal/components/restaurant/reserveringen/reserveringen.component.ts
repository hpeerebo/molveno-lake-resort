import { Component, OnInit } from '@angular/core';
import { TafelreserveringenService } from 'src/app/services/tafelreserveringen.service';
import { Observable } from 'rxjs';
import { Tafelreservering } from 'src/app/models/tafelreservering';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmComponent } from 'src/app/shared/components/modal-confirm/modal-confirm.component';
import { FormTafelreserveringComponent } from 'src/app/shared/components/form-tafelreservering/form-tafelreservering.component';

@Component({
  selector: 'app-reserveringen',
  templateUrl: './reserveringen.component.html',
  styleUrls: ['./reserveringen.component.scss']
})
export class ReserveringenComponent implements OnInit {
  public reserveringen$: Observable<Tafelreservering[]> = this.tafelreserveringenService.data$;

  columnTitle: string = "aanvangstijd";
  public columnSortClickHandler(event: 'aanvangstijd' | 'personen' | 'naam' | 'telefoon'): string {
    this.columnTitle = event;
    return this.columnTitle;
  }

  constructor(
    private tafelreserveringenService: TafelreserveringenService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
  }

  public handleNewReservationButtonClick() {
    this.openFormTafelreserveringModal();
  }

  public handleModifyReservationButtonClick(reservering: Tafelreservering) {
    this.openFormTafelreserveringModal(reservering);
  }

  public handleDeleteReservationButtonClick(reservering: Tafelreservering) {
    this.verwijderReservering(reservering);
  }

  private async openFormTafelreserveringModal(tafelreservering?: Tafelreservering) {
    const modal = this.modalService.open(FormTafelreserveringComponent);

    if (tafelreservering) {
      modal.componentInstance.tafelreservering = tafelreservering;
    }

    try {
      const result = await modal.result
      if (result.id) this.tafelreserveringenService.updateTafelreservering(result);
      else this.tafelreserveringenService.addNewReservering(result);
    } catch (message) { }
  }

  private async verwijderReservering(reservering: Tafelreservering) {
    try {
      const result = await this.modalService.open(ModalConfirmComponent).result;
      if (result === 'yes') this.tafelreserveringenService.deleteReservering(reservering);
    } catch (message) { }
  }
}
