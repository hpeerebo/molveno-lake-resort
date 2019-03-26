import {Component, OnDestroy, OnInit} from '@angular/core';
import {KamerreserveringenService} from "../../../../services/kamerreserveringen.service";
import {ActivatedRoute, Router} from "@angular/router";
import {KamerReservering} from "../../../../models/kamerreservering";
import {KamerReserveringDetailsFormGroup} from "./kamerreserveringdetailsormgroup";
import {DateFunctions} from "../../../../shared/services/date-functions";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormPrintKamerreseveringComponent} from "../kamers-form/form-print-kamerresevering/form-print-kamerresevering.component";
import {FormEmailKamerreseveringComponent} from '../kamers-form/form-email-kamerresevering/form-email-kamerresevering.component';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {FormDownloadKamerreseveringComponent} from "../kamers-form/form-download-kamerresevering/form-download-kamerresevering.component";

@Component({
  //changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-kamerreserveringdetails',
  templateUrl: './kamerreserveringdetails.component.html',
  styleUrls: ['./kamerreserveringdetails.component.scss']
})
export class KamerreserveringdetailsComponent implements OnInit, OnDestroy {

  constructor(private kamerreserveringenservice: KamerreserveringenService,
              private route : ActivatedRoute,
              private router: Router,
              private dateservice: DateFunctions,
              private modalService: NgbModal,) {};

  public kamerreserveringen$: Observable<KamerReservering[] | undefined> = this.kamerreserveringenservice.getKamerReseveringById(true, this.getReseveringBasedOnId());
  public booking$: Observable<KamerReservering[] | undefined> = this.kamerreserveringen$;

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
  private showSpinnerOnLoad: boolean = false;
  private incheckenToegestaan: boolean = false;

  public kamerreserveringdetailsormgroup = new KamerReserveringDetailsFormGroup();

  async ngOnInit() {
    this.inchecken = false;

    if(this.getReseveringBasedOnId()) {
       this.booking$.pipe(
        tap( booking => {
          if(booking) {
            this.datumtot = booking[0].datumtot;
            this.datumvan = booking[0].datumvan;
            this.numberOfDays = this.calculateNumberofDays(this.datumvan, this.datumtot);

            if(booking[0].inchecken){
              this.inchecken = true;
            }

            if(booking[0].uitchecken){
              this.uitchecken = true;
            }

            booking.forEach(prijs => {
              this.storagePrice = this.addToStorage(prijs.prijs * this.numberOfDays);
            });

            this.totalPrice = this.sumAll(this.storagePrice);

            this.kamerreserveringdetailsormgroup.setValue({
              voornaam: booking[0].voornaam,
              achternaam: booking[0].achternaam,
              telefoonnummer: booking[0].telefoonnummer,
              emailadres: booking[0].emailadres,
              identiteitsid: booking[0].identiteitsid,
              postcode: booking[0].postcode,
              straat: booking[0].straat,
              huisnummer: booking[0].huisnummer,
              woonplaats: booking[0].woonplaats,
              land: booking[0].land,
              datumvan: booking[0].datumvan,
              datumtot: booking[0].datumtot,
              kamernaam: booking[0].kamernaam,
              inchecken: booking[0].inchecken,
              uitchecken: booking[0].uitchecken,
              personen: booking[0].personen,
              prijs: booking[0].prijs,
              reserveringsnummer: booking[0].reserveringsnummer,
            });
          }
        })
      ).subscribe();

       this.delay(2000).then( () => {
         if(this.datumvan <= this.dateservice.getCurrentDate()){
           this.incheckenToegestaan = true;
         }
         this.showSpinnerOnLoad = true;
       })
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
    this.booking$.pipe(
      tap(booking => {
        if(booking) {

          if (this.inchecken) {
            this.incheckdatum = this.todayDate;
          }

          if (this.uitchecken) {
            this.uitcheckdatum = this.todayDate;
          }

          booking.forEach( kamer => {
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
      })
    ).subscribe();
    this.resetInitialValues();
    this.router.navigateByUrl('managementportal/kamerreserveringen');
  }

  openBookingPrintingForm(){
    const modalPrintBooking = this.modalService.open(FormPrintKamerreseveringComponent, {
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
        modalPrintBooking.componentInstance.datumvan = this.datumvan;
        modalPrintBooking.componentInstance.datumtot = this.datumtot;
        modalPrintBooking.componentInstance.kamers = booking;
      })
    ).subscribe();

  }

  openBookingEmailForm(){
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
        modalPrintBooking.componentInstance.datumvan = this.datumvan;
        modalPrintBooking.componentInstance.datumtot = this.datumtot;
        modalPrintBooking.componentInstance.kamers = booking;
      })
    ).subscribe();
  }


  openBookingDownloadForm(){
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
        modalDownBooking.componentInstance.kamers = booking;
      })
    ).subscribe();

  }
  calculateNumberofDays(datumvan: string, datumtot: string){
    this.numberOfDays = (new Date(this.datumtot).getTime() - new Date(this.datumvan).getTime())/(1000 * 60 * 60 * 24);
    if(this.numberOfDays === 0){
      this.numberOfDays = 1;
    }
    return this.numberOfDays;
  }

  private resetInitialValues() {
    this.storagePrice.length = 0;
    this.numberOfDays = 0;
    this.totalPrice = 0;
    this.datumvan = '';
    this.datumtot ='';
    this.inchecken = false;
    this.incheckdatum = '';
    this.uitcheckdatum = '';
    this.uitchecken = false;
    this.showSpinnerOnLoad = false;
    this.incheckenToegestaan = false;
  }

  private addToStorage(result: number) {
    return this.storagePrice = [...this.storagePrice, result];
  }

  public sumAll(numbers: number[]): number {
    return numbers.reduce((a: number,b: number) => a + b, 0);
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms));
  }

  ngOnDestroy(): void {
    this.showSpinnerOnLoad = false ;
    this.numberOfDays = 0;
    this.totalPrice = 0;
    this.datumvan = '';
    this.datumtot ='';
    this.inchecken = false;
    this.incheckdatum = '';
    this.uitcheckdatum = '';
    this.uitchecken = false;
    this.showSpinnerOnLoad = false;
    this.incheckenToegestaan = false;
  }

}
