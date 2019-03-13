import { Component, OnInit } from '@angular/core';
import { KamerreserveringenService } from 'src/app/services/kamerreserveringen.service';
import { take, tap } from 'rxjs/operators';
import { KamerReservering } from 'src/app/models/kamerreservering';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import {FormKamerreserveringdetailsComponent} from "../kamers-form/form-kamerreserveringdetails/form-kamerreserveringdetails.component";

@Component({
  selector: 'app-kamerreservering',
  templateUrl: './kamerreservering.component.html',
  styleUrls: ['./kamerreservering.component.scss']
})
export class KamerreserveringComponent implements OnInit {
  kamerreserveringen: KamerReservering[] | undefined = [];
  public selectedResevering?: KamerReservering;
  closeResult: string = "";

  constructor(private readonly kamerreserveringservice: KamerreserveringenService, private readonly modalService: NgbModal, private router: Router) { }

  field: string = "";
  public clickColumnHandler(event: string): string {
    this.field = event;
    return this.field;
  }

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
    if (kamerReservering) {
      modalKamerReservering.componentInstance.kamerReservering = kamerReservering;
    }
  }

  onSelect(kamerresevering: KamerReservering): void {
    this.selectedResevering = kamerresevering;
  }


  openSm(content: NgbModal) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  deleteRoom(kamerdata: KamerReservering) {
    if (kamerdata) {
      this.kamerreserveringservice.deleteKamerReservering(kamerdata);
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
