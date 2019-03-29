import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {KamerReservering} from "../../../../../models/kamerreservering";
import {KamerReserveringDetailsFormGroup} from "../form-kamerresevering-details/kamerreserveringdetailsormgroup";
import {DateFunctions} from "../../../../../shared/services/date-functions";

@Component({
  selector: 'app-form-download-kamerresevering',
  templateUrl: './form-download-kamerresevering.component.html',
  styleUrls: ['./form-download-kamerresevering.component.scss']
})
export class FormDownloadKamerreseveringComponent implements OnInit {

  public booking$ = new Observable<KamerReservering[] | undefined>(undefined);
  public kamerreserveringdetailsormgroup = new KamerReserveringDetailsFormGroup();
  private numberOfDays: number = 0;
  private totalPrice: number = 0;
  private datumvan: string = '';
  private datumtot: string = '';
  private inchecken: boolean = false;
  private incheckdatum: string = '';
  private uitcheckdatum: string = '';
  private uitchecken: boolean = false;
  private todayDate: string = this.dateservice.getCurrentDate();

  constructor( private dateservice: DateFunctions, private modalService: NgbModal,) { }

  ngOnInit() {
    const modalDownBooking = this.modalService.open(FormDownloadKamerreseveringComponent, {
      size: "lg",
      ariaLabelledBy: "modal-basic-title"
    });
    modalDownBooking.componentInstance.action = "edit";

    this.booking$.pipe(
      tap(booking => {
        modalDownBooking.componentInstance.numberOfDays = this.numberOfDays;
        modalDownBooking.componentInstance.totalPrice = this.totalPrice;
        modalDownBooking.componentInstance.todayDate = this.todayDate;
        modalDownBooking.componentInstance.voornaam = this.kamerreserveringdetailsormgroup.value.voornaam;
        modalDownBooking.componentInstance.achternaam = this.kamerreserveringdetailsormgroup.value.achternaam;
        modalDownBooking.componentInstance.telefoonnummer = this.kamerreserveringdetailsormgroup.value.telefoonnummer;
        modalDownBooking.componentInstance.emailadres = this.kamerreserveringdetailsormgroup.value.emailadres;
        modalDownBooking.componentInstance.identiteitsid = this.kamerreserveringdetailsormgroup.value.identiteitsid;
        modalDownBooking.componentInstance.postcode = this.kamerreserveringdetailsormgroup.value.postcode;
        modalDownBooking.componentInstance.straat = this.kamerreserveringdetailsormgroup.value.straat;
        modalDownBooking.componentInstance.huisnummer = this.kamerreserveringdetailsormgroup.value.huisnummer;
        modalDownBooking.componentInstance.woonplaats = this.kamerreserveringdetailsormgroup.value.woonplaats;
        modalDownBooking.componentInstance.land = this.kamerreserveringdetailsormgroup.value.land;
        modalDownBooking.componentInstance.inchecken = this.kamerreserveringdetailsormgroup.value.inchecken || this.incheckdatum;
        modalDownBooking.componentInstance.uitchecken = this.kamerreserveringdetailsormgroup.value.uitchecken || this.uitcheckdatum;
        modalDownBooking.componentInstance.reserveringsnummer = this.kamerreserveringdetailsormgroup.value.reserveringsnummer;
        modalDownBooking.componentInstance.datumvan = this.datumvan;
        modalDownBooking.componentInstance.datumtot = this.datumtot;
        modalDownBooking.componentInstance.korting = this.kamerreserveringdetailsormgroup.value.korting;
        modalDownBooking.componentInstance.kamers = booking;
      })
    ).subscribe();
  }

}
