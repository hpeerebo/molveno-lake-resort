import { Component, OnInit } from '@angular/core';
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
export class ManagementPortalTafelsComponent implements OnInit {
  public tafels$: Observable<Tafel[]> = this.tafelsService.data$;

  columnTitle: string = "kenmerk";
  public columnSortClickHandler(event: 'kenmerk' | 'personen'): string {
    this.columnTitle = event;
    return this.columnTitle;
  }

  constructor(
    private tafelsService: TafelsService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
  }

  public handleNewTableButtonClick() {
    this.openFormTafelModal();
  }

  public handleModifyTableButtonClick(tafel: Tafel) {
    this.openFormTafelModal(tafel);
  }

  public handleDeleteTableButtonClick(tafel: Tafel) {
    this.verwijderTafel(tafel);
  }

  private async openFormTafelModal(tafel?: Tafel) {
    const modal = this.modalService.open(FormTafelComponent);

    if (tafel) {
      modal.componentInstance.tafel = tafel;
    }

    try {
      const result = await modal.result;
      if (result.id) this.tafelsService.updateTafel(result);
      else this.tafelsService.addNewTafel(result);
    } catch (message) { }
  }

  private async verwijderTafel(tafel: Tafel) {
    try {
      const result = await this.modalService.open(ModalConfirmComponent).result;
      if (result === 'yes') this.tafelsService.deleteTafel(tafel);
    } catch (message) { }
  }
}
