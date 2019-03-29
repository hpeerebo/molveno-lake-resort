import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {KamerReservering} from "../../../../../models/kamerreservering";
import {KamerReserveringDetailsFormGroup} from "../form-kamerresevering-details/kamerreserveringdetailsormgroup";
import {DateFunctions} from "../../../../../shared/services/date-functions";

@Component({
  selector: 'app-form-email-kamerresevering',
  templateUrl: './form-email-kamerresevering.component.html',
  styleUrls: ['./form-email-kamerresevering.component.scss']
})
export class FormEmailKamerreseveringComponent implements OnInit {

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
    const modalPrintBooking = this.modalService.open(FormEmailKamerreseveringComponent, {
      size: "lg",
      ariaLabelledBy: "modal-basic-title"
    });
    modalPrintBooking.componentInstance.action = "edit";
    this.booking$.pipe(
      tap(booking => {
        modalPrintBooking.componentInstance.numberOfDays = this.numberOfDays;
        modalPrintBooking.componentInstance.totalPrice = this.totalPrice;
        modalPrintBooking.componentInstance.todayDate = this.todayDate;
        modalPrintBooking.componentInstance.voornaam = this.kamerreserveringdetailsormgroup.value.voornaam;
        modalPrintBooking.componentInstance.achternaam = this.kamerreserveringdetailsormgroup.value.achternaam;
        modalPrintBooking.componentInstance.telefoonnummer = this.kamerreserveringdetailsormgroup.value.telefoonnummer;
        modalPrintBooking.componentInstance.emailadres = this.kamerreserveringdetailsormgroup.value.emailadres;
        modalPrintBooking.componentInstance.identiteitsid = this.kamerreserveringdetailsormgroup.value.identiteitsid;
        modalPrintBooking.componentInstance.postcode = this.kamerreserveringdetailsormgroup.value.postcode;
        modalPrintBooking.componentInstance.straat = this.kamerreserveringdetailsormgroup.value.straat;
        modalPrintBooking.componentInstance.huisnummer = this.kamerreserveringdetailsormgroup.value.huisnummer;
        modalPrintBooking.componentInstance.woonplaats = this.kamerreserveringdetailsormgroup.value.woonplaats;
        modalPrintBooking.componentInstance.land = this.kamerreserveringdetailsormgroup.value.land;
        modalPrintBooking.componentInstance.inchecken = this.kamerreserveringdetailsormgroup.value.inchecken || this.incheckdatum;
        modalPrintBooking.componentInstance.uitchecken = this.kamerreserveringdetailsormgroup.value.uitchecken || this.uitcheckdatum;
        modalPrintBooking.componentInstance.reserveringsnummer = this.kamerreserveringdetailsormgroup.value.reserveringsnummer;
        modalPrintBooking.componentInstance.korting = this.kamerreserveringdetailsormgroup.value.korting;
        modalPrintBooking.componentInstance.datumvan = this.datumvan;
        modalPrintBooking.componentInstance.datumtot = this.datumtot;
        modalPrintBooking.componentInstance.kamers = booking;
      })
    ).subscribe();
  }

  openBookingEmailForm() {

  }

}
