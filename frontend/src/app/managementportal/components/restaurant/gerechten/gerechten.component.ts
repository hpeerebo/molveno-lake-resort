import { Component } from '@angular/core';
import { GerechtenService } from 'src/app/services/gerechten.service';
import { Observable } from 'rxjs';
import { Gerecht } from 'src/app/models/gerecht';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGerechtComponent } from 'src/app/shared/components/form-gerecht/form-gerecht.component';
import { ModalConfirmComponent } from 'src/app/shared/components/modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-gerechten',
  templateUrl: './gerechten.component.html',
  styleUrls: ['./gerechten.component.scss']
})
export class ManagementPortalGerechtenComponent {

  field: string = "naam";
  public clickColumnHandler(event: string): string {
    this.field = event;
    return console.log(this.field), this.field;
  }

  gerechten$: Observable<Gerecht[]> = this.gerechtenService.gerechten$;

  constructor(private gerechtenService: GerechtenService, private modalService: NgbModal) {}

  openFormGerechtModal(gerecht?: Gerecht) {
    const modal = this.modalService.open(FormGerechtComponent);

    if (gerecht) {
      modal.componentInstance.gerecht = gerecht;
    }

    modal.result
      .then(result => {
        if (result.id) {
          this.gerechtenService.updateGerecht(result);
        } else {
          this.gerechtenService.addNewGerecht(result);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  verwijderGerecht(gerecht: Gerecht) {
    this.modalService
      .open(ModalConfirmComponent)
      .result.then(result => {
        if (result === 'yes') {
          this.gerechtenService.deleteGerecht(gerecht);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}
