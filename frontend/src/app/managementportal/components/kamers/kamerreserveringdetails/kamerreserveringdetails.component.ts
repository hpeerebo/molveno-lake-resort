import { Component, OnInit} from '@angular/core';
import {KamerreserveringenService} from "../../../../services/kamerreserveringen.service";
import {ActivatedRoute, Router} from "@angular/router";
import {KamerReservering} from "../../../../models/kamerreservering";
import {KamerReserveringDetailsFormGroup} from "./kamerreserveringdetailsormgroup";
import {DateFunctions} from "../../../../shared/services/date-functions";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormPrintKamerreseveringComponent} from "../kamers-form/form-print-kamerresevering/form-print-kamerresevering.component";
import {FormEmailKamerreseveringComponent} from '../kamers-form/form-email-kamerresevering/form-email-kamerresevering.component';
import {Observable} from "rxjs";

@Component({
  //changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-kamerreserveringdetails',
  templateUrl: './kamerreserveringdetails.component.html',
  styleUrls: ['./kamerreserveringdetails.component.scss']
})
export class KamerreserveringdetailsComponent implements OnInit {

  constructor(private kamerreserveringenservice: KamerreserveringenService,
              private route : ActivatedRoute,
              private router: Router,
              private dateservice: DateFunctions,
              private modalService: NgbModal,) {};

  public kamerreserveringen$: Observable<KamerReservering[] | undefined> = this.kamerreserveringenservice.getKamerReseveringById(true, this.getReseveringBasedOnId());
  //public kamerreserveringen$: Promise<KamerReservering[]> = this.kamerreserveringenservice.getKamerReseveringById2(this.getReseveringBasedOnId());
  public booking: KamerReservering[] | undefined = undefined;
  public booking2: Observable<KamerReservering[] | undefined> = this.kamerreserveringen$;

  private storagePrice: number[] = [];
  private numberOfDays: number = 0;
  private totalPrice: number = 0;
  private datumvan: string = '';
  private datumtot: string = '';
  private inchecken: boolean = false;
  private incheckdatum: string = '';
  private uitcheckdatum: string = '';
  private uitchecken: boolean = false;
  private todayDate: string = this.dateservice.getCurrentDate();
  private reserveringsnummer: null | string  = "";

  public kamerreserveringdetailsormgroup = new KamerReserveringDetailsFormGroup();

  async ngOnInit() {

    if(!this.reserveringsnummer) {

      //this.kamerreserveringen$.then(values => {
        //this.booking = values
      //});
      this.kamerreserveringen$.subscribe({
        next: value => this.booking = value
      });

      setTimeout(() => {
        if(this.booking) {
          this.datumtot = this.booking[0].datumtot;
          this.datumvan = this.booking[0].datumvan;
          this.numberOfDays = this.calculateNumberofDays(this.datumvan, this.datumtot);

          if(this.booking[0].inchecken){
            this.inchecken = true;
          }

          if(this.booking[0].uitchecken){
            this.uitchecken = true;
          }

          this.booking.forEach(prijs => {
            this.storagePrice = this.addToStorage(prijs.prijs * this.numberOfDays);
          });

          this.totalPrice = this.sumAll(this.storagePrice);

          this.kamerreserveringdetailsormgroup.setValue({
            voornaam: this.booking[0].voornaam,
            achternaam: this.booking[0].achternaam,
            telefoonnummer: this.booking[0].telefoonnummer,
            emailadres: this.booking[0].emailadres,
            identiteitsid: this.booking[0].identiteitsid,
            postcode: this.booking[0].postcode,
            straat: this.booking[0].straat,
            huisnummer: this.booking[0].huisnummer,
            woonplaats: this.booking[0].woonplaats,
            land: this.booking[0].land,
            datumvan: this.booking[0].datumvan,
            datumtot: this.booking[0].datumtot,
            kamernaam: this.booking[0].kamernaam,
            inchecken: this.booking[0].inchecken,
            uitchecken: this.booking[0].uitchecken,
            personen: this.booking[0].personen,
            prijs: this.booking[0].prijs,
            reserveringsnummer: this.booking[0].reserveringsnummer,
          });
        }
      });
    }
  }

  backToOverview() {
    this.kamerreserveringdetailsormgroup.reset();
    this.router.navigateByUrl('managementportal/kamerreserveringen');
  }

  getReseveringBasedOnId(): string{
    this.route.paramMap.subscribe(params => {
      this.reserveringsnummer = params.get("reserveringsnummer")
    });
    // @ts-ignore
    return this.reserveringsnummer;
  }

  saveChangesToBooking(){
    if(this.booking) {

      if (this.inchecken) {
        this.incheckdatum = this.todayDate;
      }

      if (this.uitchecken) {
        this.uitcheckdatum = this.todayDate;
      }

      this.booking.forEach( kamer => {
        this.kamerreserveringenservice.updateReservering(new KamerReservering(
          kamer.id,
          this.kamerreserveringdetailsormgroup.value.voornaam,
          this.kamerreserveringdetailsormgroup.value.achternaam,
          this.kamerreserveringdetailsormgroup.value.telefoonnummer,
          this.kamerreserveringdetailsormgroup.value.emailadres,
          this.kamerreserveringdetailsormgroup.value.identiteitsid,
          this.kamerreserveringdetailsormgroup.value.postcode,
          this.kamerreserveringdetailsormgroup.value.straat,
          this.kamerreserveringdetailsormgroup.value.huisnummer,
          this.kamerreserveringdetailsormgroup.value.woonplaats,
          this.kamerreserveringdetailsormgroup.value.land,
          kamer.datumvan,
          kamer.datumtot,
          kamer.kamernaam,
          this.kamerreserveringdetailsormgroup.value.inchecken || this.incheckdatum,
          this.kamerreserveringdetailsormgroup.value.uitchecken ||this.uitcheckdatum,
          kamer.personen,
          kamer.prijs,
          this.kamerreserveringdetailsormgroup.value.reserveringsnummer,
        ));
      });
    }

    this.router.navigateByUrl('managementportal/kamerreserveringen');
  }

  openBookingPrintingForm(){
    const modalPrintBooking = this.modalService.open(FormPrintKamerreseveringComponent, {
      size: "lg",
      ariaLabelledBy: "modal-basic-title"
    });
    modalPrintBooking.componentInstance.action = "edit";
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
    modalPrintBooking.componentInstance.datumvan = this.datumvan;
    modalPrintBooking.componentInstance.datumtot = this.datumtot;
    modalPrintBooking.componentInstance.kamers = this.booking;
  }

  openBookingEmailForm(){
    const modalPrintBooking = this.modalService.open(FormEmailKamerreseveringComponent, {
      size: "lg",
      ariaLabelledBy: "modal-basic-title"
    });
    modalPrintBooking.componentInstance.action = "edit";
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
    modalPrintBooking.componentInstance.datumvan = this.datumvan;
    modalPrintBooking.componentInstance.datumtot = this.datumtot;
    modalPrintBooking.componentInstance.kamers = this.booking;
  }

  calculateNumberofDays(datumvan: string, datumtot: string){
    const date1 = this.convertDate(new Date(datumvan));
    const date2 = this.convertDate(new Date(datumtot));
    return this.numberOfDays = parseInt(date2)- parseInt(date1);

  }

  convertDate(date: Date): string{
    let dd:any = date.getDate();
    let mm:any = date.getMonth()+1;
    let yyyy:any = date.getFullYear();

    if(dd<10) {
      dd = '0'+dd
    }

    if(mm<10) {
      mm = '0'+mm
    }
    return yyyy+mm+dd;
  }

  private resetInitialValues() {
    this.storagePrice.length = 0;
  }

  private addToStorage(result: number) {
    return this.storagePrice = [...this.storagePrice, result];
  }

  public sumAll(numbers: number[]): number {

    return numbers.reduce((a: number,b: number) => a + b, 0);
  }

}
