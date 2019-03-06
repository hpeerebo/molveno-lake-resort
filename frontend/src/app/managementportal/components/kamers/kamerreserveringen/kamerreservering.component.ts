import { Component, OnInit } from '@angular/core';
import { KamerreserveringenService } from 'src/app/services/kamerreserveringen.service';
import { take, tap } from 'rxjs/operators';
import { KamerReservering } from 'src/app/models/kamerreservering';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormKamerreserveringComponent } from '../kamers-form/form-kamerreservering/form-kamerreservering.component';

@Component({
  selector: 'app-kamerreservering',
  templateUrl: './kamerreservering.component.html',
  styleUrls: ['./kamerreservering.component.scss']
})
export class KamerreserveringComponent implements OnInit {
  kamerreserveringen: KamerReservering[] | undefined = [];
  constructor(private readonly kamerreserveringservice: KamerreserveringenService, private readonly modalService: NgbModal) { }

  getKamerReserveringen(){
    this.kamerreserveringservice.getKamerReserveringen()
    .pipe(
    take(1),
    tap(result => (this.kamerreserveringen = result)))
    .subscribe();
  }
  openFormKamerReserveringModal(kamerreservering?: KamerReservering) {
    const modal = this.modalService.open(FormKamerreserveringComponent);

    if (kamerreservering) {
      modal.componentInstance.kamerreservering = kamerreservering;
    }

    modal.result
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }
  ngOnInit() {
  }

}
