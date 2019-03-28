import {Component, OnInit} from '@angular/core';
import {KamerreserveringenService} from "../../../../services/kamerreserveringen.service";
import {ActivatedRoute} from "@angular/router";
import {FormKamerreseveringDetailsComponent} from "../kamers-form/form-kamerresevering-details/form-kamerresevering-details.component";

@Component({
  selector: 'app-kamerreserveringdetails',
  templateUrl: './kamerreserveringdetails.component.html',
  styleUrls: ['./kamerreserveringdetails.component.scss']
})

export class KamerreserveringdetailsComponent implements OnInit {

  private reserveringsnummer: null | string = "";
  reseveringsId = this.getReseveringBasedOnId();

  constructor(private route: ActivatedRoute,
              private formkamerreseveringdetails: FormKamerreseveringDetailsComponent,) {
  };

  ngOnInit() {
    this.formkamerreseveringdetails.ngOnInit();
  }

  getReseveringBasedOnId(): string {
    this.route.paramMap.subscribe(params => {
      this.reserveringsnummer = params.get("reserveringsnummer")
    });
    // @ts-ignore
    return this.reserveringsnummer;
  }

}
