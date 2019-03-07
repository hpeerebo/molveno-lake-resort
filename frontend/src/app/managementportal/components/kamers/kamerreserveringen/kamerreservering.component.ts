import { Component, OnInit } from '@angular/core';
import { KamerreserveringenService } from 'src/app/services/kamerreserveringen.service';
import { take, tap } from 'rxjs/operators';
import { KamerReservering } from 'src/app/models/kamerreservering';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import {FormKamerreserveringdetailsComponent} from "../kamers-form/form-kamerreserveringdetails/form-kamerreserveringdetails.component";

@Component({
  selector: 'app-kamerreservering',
  templateUrl: './kamerreservering.component.html',
  styleUrls: ['./kamerreservering.component.scss']
})
export class KamerreserveringComponent implements OnInit {
  kamerreserveringen: KamerReservering[] | undefined = [];
  constructor(private readonly kamerreserveringservice: KamerreserveringenService, private readonly modalService: NgbModal, private router: Router) { }

  getKamerReserveringen(){
    this.kamerreserveringservice.getKamerReserveringen()
    .pipe(
    take(1),
    tap(result => (this.kamerreserveringen = result)))
    .subscribe();
  }

  ngOnInit() {
    this.getKamerReserveringen();
  }

  openFormKamerReserveringDetailsModal(kamerReservering: KamerReservering){
    const modalKamerReservering = this.modalService.open(FormKamerreserveringdetailsComponent);
    console.log(kamerReservering);
    if (kamerReservering) {
      modalKamerReservering.componentInstance.kamerReservering = kamerReservering;
    }
  }

}
