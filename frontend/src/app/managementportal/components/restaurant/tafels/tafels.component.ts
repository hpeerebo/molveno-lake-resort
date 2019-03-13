import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Tafel } from 'src/app/models/tafel';
import { TafelsService } from 'src/app/services/tafels.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormTafelComponent } from 'src/app/shared/components/form-tafel/form-tafel.component';
import { ModalConfirmComponent } from 'src/app/shared/components/modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-tafels',
  templateUrl: './tafels.component.html',
  styleUrls: ['./tafels.component.scss']
})
export class ManagementPortalTafelsComponent {
  public tafels$: Observable<Tafel[]> = this.tafelsService.data$;

  field: string = "kenmerk";
  public clickColumnHandler(event: string): string {
    this.field = event;
    return console.log(this.field), this.field;
  }

  constructor(
    private tafelsService: TafelsService,
    private modalService: NgbModal,
    ) {}

  openFormTafelModal(tafel?: Tafel) {
    const modal = this.modalService.open(FormTafelComponent);

    if (tafel) {
      modal.componentInstance.tafel = tafel;
    }

    modal.result
      .then(result => {
        if (result.id) {
          this.tafelsService.updateTafel(result);
        } else {
          this.tafelsService.addNewTafel(result);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  verwijderTafel(tafel: Tafel) {
    this.modalService
      .open(ModalConfirmComponent)
      .result.then(result => {
        if (result === 'yes') {
          this.tafelsService.deleteTafel(tafel);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}
