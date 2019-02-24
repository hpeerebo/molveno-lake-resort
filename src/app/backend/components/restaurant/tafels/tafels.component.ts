import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Tafel } from 'src/app/models/tafel';
import { TafelsService } from 'src/app/services/tafels.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormTafelComponent } from 'src/app/shared/components/form-tafel/form-tafel.component';

@Component({
  selector: 'app-tafels',
  templateUrl: './tafels.component.html',
  styleUrls: ['./tafels.component.scss']
})
export class TafelsComponent {
  public tafels: Observable<Tafel[]> = this.tafelsService.getAllTafels();

  constructor(private tafelsService: TafelsService, private modalService: NgbModal) {}

  openFormModal() {
    const modalRef = this.modalService.open(FormTafelComponent);

    modalRef.result
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
