import { Component, OnInit } from '@angular/core';
import { KamerreserveringenService } from 'src/app/services/kamerreserveringen.service';
import { KamerReservering } from 'src/app/models/kamerreservering';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import {FormKamerreserveringdetailsComponent} from "../kamers-form/form-kamerreserveringdetails/form-kamerreserveringdetails.component";
import {Observable} from "rxjs";

@Component({
  selector: 'app-kamerreservering',
  templateUrl: './kamerreservering.component.html',
  styleUrls: ['./kamerreservering.component.scss']
})
export class KamerreserveringComponent implements OnInit {

  constructor(private readonly kamerreserveringservice: KamerreserveringenService, private readonly modalService: NgbModal, private router: Router) { }
  public kamerreserveringen: Observable<KamerReservering[] | undefined> = this.kamerreserveringservice.getKamerToekomstReserveringen();
  public selectedResevering?: KamerReservering;
  closeResult: string = "";

  field: string = "";
  public clickColumnHandler(event: string): string {
    this.field = event;
    return this.field;
  }

  ngOnInit() {

  }

  openFormKamerReserveringDetailsModal(kamerReservering: KamerReservering){
    const modalKamerReservering = this.modalService.open(FormKamerreserveringdetailsComponent);
    if (kamerReservering) {
      modalKamerReservering.componentInstance.kamerReservering = kamerReservering;
    }
  }

  loadCurrentResevering() {
    this.kamerreserveringservice.getKamerToekomstReserveringen( true);
  }

  loadHistoriesResevering() {
    this.kamerreserveringservice.getKamerVerledenReserveringen( true);
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

  deleteResevering(kamerdata: KamerReservering) {
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
