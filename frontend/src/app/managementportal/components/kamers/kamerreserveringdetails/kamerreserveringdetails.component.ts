import { Component, OnInit } from '@angular/core';
import {KamerreserveringenService} from "../../../../services/kamerreserveringen.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {KamerReservering} from "../../../../models/kamerreservering";

@Component({
  selector: 'app-kamerreserveringdetails',
  templateUrl: './kamerreserveringdetails.component.html',
  styleUrls: ['./kamerreserveringdetails.component.scss']
})
export class KamerreserveringdetailsComponent implements OnInit {

  constructor(private kamerreserveringenservice: KamerreserveringenService,
              private route : ActivatedRoute) {}
  public kamerreserveringen: Observable<KamerReservering[] | undefined> = this.kamerreserveringenservice.getKamerReseveringById(this.getReseveringBasedOnId());
  private id: null | string  = "";

  ngOnInit() {

      }

  submitForm() {

  }

  getReseveringBasedOnId(): number{
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id")
    });
    // @ts-ignore
    return parseInt(this.id);
  }

}
