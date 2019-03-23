import { Component, OnInit } from '@angular/core';
import {KamerreserveringenService} from "../../../../services/kamerreserveringen.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {KamerReservering} from "../../../../models/kamerreservering";
import {KamerReserveringDetailsFormGroup} from "./kamerreserveringdetailsormgroup";


@Component({
  selector: 'app-kamerreserveringdetails',
  templateUrl: './kamerreserveringdetails.component.html',
  styleUrls: ['./kamerreserveringdetails.component.scss']
})
export class KamerreserveringdetailsComponent implements OnInit {

  constructor(private kamerreserveringenservice: KamerreserveringenService,
              private route : ActivatedRoute) {};

  public kamerreserveringen: Observable<KamerReservering[] | undefined> = this.kamerreserveringenservice.getKamerReseveringById(this.getReseveringBasedOnId());
  public kamerreserveringdetailsormgroup = new KamerReserveringDetailsFormGroup();

  private reserveringsnummer: null | string  = "";

  ngOnInit() {


      }

  submitForm() {

  }


  getReseveringBasedOnId(): string{
    this.route.paramMap.subscribe(params => {
      this.reserveringsnummer = params.get("reserveringsnummer")
    });
    // @ts-ignore
    return this.reserveringsnummer;
  }

}
