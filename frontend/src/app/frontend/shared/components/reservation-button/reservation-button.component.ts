import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GastKamerReserveringenService } from '../../services/gast-kamerreserveringen.service';
import { GastKamerReserveringComponent } from '../gast-kamerreservering/gast-kamerreservering.component';
import { GastKamerReservering } from '../../models/gast-kamerreservering';

@Component({
  selector: 'frontend-reservation-button-item',
  templateUrl: './reservation-button.component.html',
  styleUrls: ['./reservation-button.component.scss']
})
export class ReservationButtonComponent implements OnInit {

  @Input() public roomdetail = {};
  @Input() public siteLanguage: any | undefined = undefined;
  closeResult: string = "";
  constructor(
    public activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private gastkamerreserveringservice: GastKamerReserveringenService,
    ) { }

  ngOnInit() {
  }
  openFormKamerReserveringModal(kamernaam: string){
    const modalKamerReservering = this.modalService.open(GastKamerReserveringComponent);

     if (kamernaam) {
      modalKamerReservering.componentInstance.kamernaam = kamernaam;
    }
    modalKamerReservering.componentInstance.action = "add";
    modalKamerReservering.result.then(resultPromise => {
      this.closeResult = resultPromise;
      this.gastkamerreserveringservice.saveKamerReservering(new GastKamerReservering(
        resultPromise.id,
        resultPromise.voornaam,
        resultPromise.achternaam,
        resultPromise.telefoonnummer,
        resultPromise.emailadres,
        resultPromise.postcode,
        resultPromise.straat,
        resultPromise.huisnummer,
        resultPromise.woonplaats,
        resultPromise.land,
        resultPromise.datumvan,
        resultPromise.datumtot,
        kamernaam
      ));
    });
  }
}
