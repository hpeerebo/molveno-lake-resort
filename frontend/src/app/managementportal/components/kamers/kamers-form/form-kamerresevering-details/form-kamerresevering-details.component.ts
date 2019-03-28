import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {KamerReserveringDetailsFormGroup} from "./kamerreserveringdetailsormgroup";
import {KamerreserveringenService} from "../../../../../services/kamerreserveringen.service";
import {DateFunctions} from "../../../../../shared/services/date-functions";
import {tap} from "rxjs/operators";
import {KamerReservering} from "../../../../../models/kamerreservering";
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";
import {CalculationFunctions} from "../../../../../shared/services/calculation-functions";

@Component({
  selector: 'app-form-kamerresevering-details',
  templateUrl: './form-kamerresevering-details.component.html',
  styleUrls: ['./form-kamerresevering-details.component.scss']
})
export class FormKamerreseveringDetailsComponent implements OnInit, OnDestroy, AfterViewInit{

  @Input() reseveringsId: string | undefined;

  public kamerreserveringen$ = new Observable<KamerReservering[] | undefined>(undefined);

  public incheckenToegestaan: boolean = false;
  public kamerreserveringdetailsormgroup = new KamerReserveringDetailsFormGroup();

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
  private showSpinnerOnLoad: boolean = true;

  constructor(private kamerreserveringenservice: KamerreserveringenService,
              private dateservice: DateFunctions,
              private router: Router,
              private calculationfunctions: CalculationFunctions) {
  };

  ngOnInit() {
    if (this.reseveringsId){
      this.kamerreserveringen$ = this.kamerreserveringenservice.getKamerReseveringById(true, this.reseveringsId);
      this.kamerreserveringen$.pipe(
        tap(booking => {
          if (booking) {
            this.datumtot = booking[0].datumtot;
            this.datumvan = booking[0].datumvan;
            this.numberOfDays = this.dateservice.calculateNumberofDays(this.datumvan, this.datumtot);

            if (booking[0].inchecken) {
              this.inchecken = true;
            }

            if (booking[0].uitchecken) {
              this.uitchecken = true;
            }

            booking.forEach(prijs => {
              this.storagePrice = this.calculationfunctions.addToStorage(prijs.prijs * this.numberOfDays);
            });

            this.totalPrice = parseInt(this.calculationfunctions.sumAll(this.storagePrice));

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
              korting: booking[0].korting || 0,
            });
          }
        })
      ).subscribe();

      this.delay(2000).then(() => {
        if (this.datumvan <= this.dateservice.getCurrentDate()) {
          this.incheckenToegestaan = true;
        }
        this.showSpinnerOnLoad = true;
      })
    }
  }

  ngAfterViewInit () {

  }

  async openDetailsForm(reserveringsnummer: string) {
    this.uitcheckdatum = reserveringsnummer;

  }

  updateTotalPrice(korting: number) {

  }

  saveChangesToBooking() {
    // this.booking$.pipe(
    //   tap(booking => {
    //     if (booking) {
    //
    //       if (this.incheckenToegestaan && this.inchecken) {
    //         this.incheckdatum = this.todayDate;
    //       } else {
    //         this.incheckdatum = '';
    //       }
    //
    //       if (this.incheckenToegestaan && this.uitchecken) {
    //         this.uitcheckdatum = this.todayDate;
    //       } else {
    //         this.uitcheckdatum = '';
    //       }
    //
    //       booking.forEach(kamer => {
    //         this.kamerreserveringenservice.updateReservering(new KamerReservering(
    //           kamer.id,
    //           this.kamerreserveringdetailsormgroup.value.voornaam,
    //           this.kamerreserveringdetailsormgroup.value.achternaam,
    //           this.kamerreserveringdetailsormgroup.value.telefoonnummer,
    //           this.kamerreserveringdetailsormgroup.value.emailadres,
    //           this.kamerreserveringdetailsormgroup.value.identiteitsid,
    //           this.kamerreserveringdetailsormgroup.value.postcode,
    //           this.kamerreserveringdetailsormgroup.value.straat,
    //           this.kamerreserveringdetailsormgroup.value.huisnummer,
    //           this.kamerreserveringdetailsormgroup.value.woonplaats,
    //           this.kamerreserveringdetailsormgroup.value.land,
    //           kamer.datumvan,
    //           kamer.datumtot,
    //           kamer.kamernaam,
    //           this.incheckdatum,
    //           this.uitcheckdatum,
    //           kamer.personen,
    //           kamer.prijs,
    //           this.kamerreserveringdetailsormgroup.value.reserveringsnummer,
    //           this.kamerreserveringdetailsormgroup.value.korting
    //         ));
    //       });
    //     }
    //   })
    // ).subscribe();
    // this.router.navigateByUrl('managementportal/kamerreserveringen');
  }

  ngOnDestroy(): void {
    this.kamerreserveringen$ = new Observable<KamerReservering[] | undefined>(undefined);
    this.kamerreserveringdetailsormgroup.reset();
    this.router.navigateByUrl('managementportal/kamerreserveringen');
  }
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms));
  }

}
