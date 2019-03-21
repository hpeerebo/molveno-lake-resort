import { Component, OnInit } from '@angular/core';
import { KamerreserveringenService } from 'src/app/services/kamerreserveringen.service';
import { KamerReservering } from 'src/app/models/kamerreservering';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import {Observable} from "rxjs";
import {ManagementPortalKamersFormComponent} from "../kamers-form/kamers-form.component";

@Component({
  selector: 'app-kamerreservering',
  templateUrl: './kamerreservering.component.html',
  styleUrls: ['./kamerreservering.component.scss']
})
export class KamerreserveringComponent implements OnInit {

  constructor(private readonly kamerreserveringservice: KamerreserveringenService, private readonly modalService: NgbModal, private router: Router) { }
  public kamerreserveringen: Observable<KamerReservering[] | undefined> = this.kamerreserveringservice.getKamerReserveringen();
  public selectedResevering?: KamerReservering;
  closeResult: string = "";

  field: string = "";
  public clickColumnHandler(event: string): string {
    this.field = event;
    return this.field;
  }

  ngOnInit() {

  }

  openKamerreserveringdetailsComponent(kamerReservering: KamerReservering){
    this.router.navigateByUrl(`managementportal/kamerreserveringen/${kamerReservering.id}`);
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
