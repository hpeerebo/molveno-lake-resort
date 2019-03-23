import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {KamerreserveringenService} from "../../../../services/kamerreserveringen.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {KamerReservering} from "../../../../models/kamerreservering";
import {KamerReserveringDetailsFormGroup} from "./kamerreserveringdetailsormgroup";
import {FormControl} from "@angular/forms";
import {forEach} from "@angular/router/src/utils/collection";


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-kamerreserveringdetails',
  templateUrl: './kamerreserveringdetails.component.html',
  styleUrls: ['./kamerreserveringdetails.component.scss']
})
export class KamerreserveringdetailsComponent implements OnInit {

  constructor(private kamerreserveringenservice: KamerreserveringenService,
              private route : ActivatedRoute,
              private router: Router) {};

  public kamerreserveringen: Observable<KamerReservering[] | undefined> = this.kamerreserveringenservice.getKamerReseveringById(true, this.getReseveringBasedOnId());

  private storagePrice: number[] = [];
  private numberOfDays: number = 0;


  public kamerreserveringdetailsormgroup = new KamerReserveringDetailsFormGroup();
  private reserveringsnummer: null | string  = "";



  ngOnInit() {
    if (this.kamerreserveringen ) {
      const test$ =this.kamerreserveringen.pipe();
      test$.subscribe(item => console.log(item));


      this.kamerreserveringdetailsormgroup.patchValue({
        voornaam: "voornaam",
        achternaam: "voornaam",
        telefoonnummer: "voornaam",
        emailadres: "voornaam",
        identiteitsid: "voornaam",
        postcode: "voornaam",
        straat: "voornaam",
        huisnummer: "voornaam",
        woonplaats: "voornaam",
        land: "voornaam",
        datumvan: "voornaam",
        datumtot: "voornaam",
      });
    }

  }

  backToOverview() {
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
    console.log(this.kamerreserveringdetailsormgroup.value.voornaam);
    this.router.navigateByUrl('managementportal/kamerreserveringen');
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

  private multiply(a: number, b: number): number {
    const result = a * b;
    this.storagePrice = this.addToStorage(result);
    return result;
  }

  private addToStorage(result: number) {
    return this.storagePrice = [...this.storagePrice, result];
  }

  public sumAll(numbers: number[]): number {
    return numbers.reduce((a: number,b: number) => a + b, 0);
  }
}
