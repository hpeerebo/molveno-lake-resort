import { Component, OnInit, Input } from '@angular/core';
import { KamerReservering } from 'src/app/models/kamerreservering';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {Kamerreserveringdetailsormgroup} from "./kamerreserveringdetailsormgroup";

@Component({
  selector: 'app-form-kamerreserveringdetails',
  templateUrl: './form-kamerreserveringdetails.component.html',
  styleUrls: ['./form-kamerreserveringdetails.component.scss']
})
export class FormKamerreserveringdetailsComponent implements OnInit {
  kamerReservering: KamerReservering | undefined = undefined;
  kamernaam: string = "";
  public kamerreserveringdetailsForm = new Kamerreserveringdetailsormgroup();

  constructor(public activeModal: NgbActiveModal) {}


  ngOnInit() {
    console.log (this.kamerReservering);
  }


}
