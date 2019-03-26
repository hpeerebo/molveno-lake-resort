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
export class ReservationButtonComponent {

  @Input() public roomdetail = {};
  @Input() public siteLanguage: any | undefined = undefined;
  
  closeResult: string = "";
  constructor(
    public activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private gastkamerreserveringservice: GastKamerReserveringenService,
    ) {}

  openFormKamerReserveringModal(kamerobject: any){
    const modalKamerReservering = this.modalService.open(GastKamerReserveringComponent, {
      size: "lg",
      ariaLabelledBy: "modal-basic-title",
  });

    if (kamerobject) {
      modalKamerReservering.componentInstance.kamertype = kamerobject.roomtype;
      modalKamerReservering.componentInstance.kamertypefull = kamerobject.roomtypefull;
    }
    modalKamerReservering.componentInstance.action = "add";
    modalKamerReservering.result.then(resultPromise => {
      this.closeResult = resultPromise;
      resultPromise.forEach((reservering: GastKamerReservering) => {
        this.gastkamerreserveringservice.saveKamerReservering(new GastKamerReservering(
          reservering.id,
          reservering.voornaam,
          reservering.achternaam,
          reservering.telefoonnummer,
          reservering.emailadres,
          reservering.identiteitsid,
          reservering.aantalpersonen,
          reservering.postcode,
          reservering.straat,
          reservering.huisnummer,
          reservering.woonplaats,
          reservering.land,
          reservering.datumvan,
          reservering.datumtot,
          reservering.kamernaam,
          reservering.inchecken,
          reservering.uitchecken,
          reservering.personen,
          reservering.prijs,
          reservering.reserveringsnummer
        ));
      });
    });
  }
}
