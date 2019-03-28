import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import { RoomService } from "src/app/services/rooms.service";
import { Kamer } from "../../../models/kamer";
import { Observable, Subscription } from "rxjs";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ManagementPortalKamersFormComponent } from "./kamers-form/kamers-form.component";
import { FormKamerreserveringComponent } from './kamers-form/form-kamerreservering/form-kamerreservering.component';
import { KamerreserveringenService } from 'src/app/services/kamerreserveringen.service';
import {KamerReservering} from "../../../models/kamerreservering";
import { FormKamersbeschikbaarComponent } from './kamers-form/form-kamersbeschikbaar/form-kamersbeschikbaar.component';
import {ActivatedRoute} from "@angular/router";
import { FormControl } from '@angular/forms';
import {DateFunctions} from "../../../shared/services/date-functions";
import { KamerModalConfirmComponent } from './kamers-form/kamer-modal-confirm/kamer-modal-confirm.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-kamers",
  templateUrl: "./kamers.component.html",
  styleUrls: ["./kamers.component.scss"]
})

export class ManagementPortalKamersComponent implements OnInit, AfterViewInit {

  constructor(
    private roomservice: RoomService,
    private kamerreserveringservice: KamerreserveringenService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private datetime: DateFunctions,
  ) {}

  public kamers: Observable<Kamer[] | undefined> = this.roomservice.getRoom();
  public selectedKamer?: Kamer;
  private param: null | string  = "";
  field: string = "";
  show: string = "";

  soortkamer = ["Budget", "Standaard", "Lux"];
  closeResult: string = "";
  showResButton: boolean = false;
  datumvan: string = '';
  datumtot: string = '';
  numberOfDays: number = 0;
  totalPrice: number = 0;
  myCheckbox: FormControl = new FormControl();
  reserverRooms: Kamer[] = [];
  //selectedRow: number = 0;
  roomSelected: boolean[] = [false];
  roomslist = new Map();

  public clickColumnHandler(event: string): string {
    this.field = event;
    return this.field;
  }

  ngOnInit() {

  }

  // voor het reserveren van een kamer vanuit Reserveringscomponent
  ngAfterViewInit () {
    this.route.paramMap.subscribe(params => {
      this.param = params.get("param")
    });
    setTimeout(() => {
      if (this.param == "reseveer") {
        this.showAvailableRoomsModal();
      }
    });
  }
  setClickedRow(index: number, kamer: Kamer){
    this.roomSelected[index] = !this.roomSelected[index];
    if (this.roomSelected[index]){
      this.reserverRooms = [...this.reserverRooms, kamer];
      this.totalPrice = this.totalPrice + (this.numberOfDays * kamer.prijs);
      this.roomslist.set(kamer, index);
    }
    if (!this.roomSelected[index]){
      this.reserverRooms = this.reserverRooms.filter(element => kamer.kamerNaam !== element.kamerNaam);
      this.totalPrice = this.totalPrice - (this.numberOfDays * kamer.prijs);
      this.roomslist.delete(kamer);
    }
}
   onSelect(kamer: Kamer): void {
    this.selectedKamer = kamer;
  }
  deleteRoomFromBucket(kamer: Kamer){
    const rowIndex = this.roomslist.get(kamer);
    if(rowIndex != 'undefined'){
      this.setClickedRow(rowIndex, kamer);
    }
  }

  deleteRoom(kamer: Kamer) {
    if (this.kamers) {
      this.roomservice.deleteRoom(kamer);
      //this.openConfirmModal('delete', kamer);
  }
  }

  openSm(content: NgbModal) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

 /*  openNewFormModal() {
    const modalRef = this.modalService.open(ManagementPortalKamersFormComponent, {
      size: "lg",
      ariaLabelledBy: "modal-basic-title",
    });
    modalRef.componentInstance.action = "add";
    modalRef.result.then(resultPromise => {
      this.roomservice.saveRoom(new Kamer(
        resultPromise.kamerNaam,
        resultPromise.kamerType,
        resultPromise.kamerLigging,
        resultPromise.aantalPersonen,
        resultPromise.prijs
      ));
    });
  } */

  openNewEditFormModal(kamer?: Kamer) {
    const modalRef = this.modalService.open(ManagementPortalKamersFormComponent, {
      size: "lg",
      ariaLabelledBy: "modal-basic-title"
    });
   // modalRef.componentInstance.model = this.selectedKamer;
   if(kamer){
    modalRef.componentInstance.model = kamer;
    modalRef.componentInstance.action = "edit";
    modalRef.result.
    then((resultPromise: Kamer) => {
    this.roomservice.updateRoom(resultPromise)
    this.openConfirmModal('edit', kamer);
    },

    reason => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

   }
   else{
    modalRef.componentInstance.action = "add";
    modalRef.result.then((resultPromise: Kamer) => {
    this.roomservice.saveRoom(resultPromise)
    this.openConfirmModal('add', resultPromise);
    },
    reason => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
   }
  }
  openConfirmModal(action: string, kamer?: Kamer){
    const modalconfirm = this.modalService.open(KamerModalConfirmComponent, {
      size: "sm",
      ariaLabelledBy: "modal-basic-title"
    });
    modalconfirm.componentInstance.model = kamer;
    modalconfirm.componentInstance.action = action;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
  async openFormKamerToReserveMultipleRooms(kamers: Kamer[]){
    const modalKamerReservering = this.modalService.open(FormKamerreserveringComponent);
    if (this.datumvan) {
      modalKamerReservering.componentInstance.datumvan = this.datumvan;
    }
    if (this.datumtot) {
      modalKamerReservering.componentInstance.datumtot = this.datumtot;
    }
    await modalKamerReservering.result.then(resultPromise => {
      const reserveringsnummer = `MO-${this.datetime.getCurrentDateTime()}-1`;

       kamers.forEach(kamer => {
      this.kamerreserveringservice.saveKamerReservering(new KamerReservering(
        resultPromise.id,
        resultPromise.voornaam,
        resultPromise.achternaam,
        resultPromise.telefoonnummer,
        resultPromise.emailadres,
        resultPromise.identiteitsid,
        resultPromise.postcode,
        resultPromise.straat,
        resultPromise.huisnummer,
        resultPromise.woonplaats,
        resultPromise.land,
        resultPromise.datumvan,
        resultPromise.datumtot,
        kamer.kamerNaam,
        resultPromise.inchecken,
        resultPromise.uitchecken,
        kamer.aantalPersonen,
        kamer.prijs,
        reserveringsnummer,
        resultPromise.korting
      ))});
      this.openConfirmModal('reserve',kamers[0])
    });
    //this.openConfirmModal('reserve',kamers[0])
  }
  openFormKamerReserveringModal(kamernaam: string){
    const modalKamerReservering = this.modalService.open(FormKamerreserveringComponent);
    const reserveringsnummer = `MO-${this.datetime.getCurrentDateTime()}-1`;
     if (kamernaam) {
      modalKamerReservering.componentInstance.kamernaam = kamernaam;
    }
    if (this.datumvan) {
      modalKamerReservering.componentInstance.datumvan = this.datumvan;
    }
    if (this.datumtot) {
      modalKamerReservering.componentInstance.datumtot = this.datumtot;
    }
    modalKamerReservering.result.then(resultPromise => {
      this.closeResult = resultPromise;
      this.kamerreserveringservice.saveKamerReservering(new KamerReservering(
        resultPromise.id,
        resultPromise.voornaam,
        resultPromise.achternaam,
        resultPromise.telefoonnummer,
        resultPromise.emailadres,
        resultPromise.identiteitsid,
        resultPromise.postcode,
        resultPromise.straat,
        resultPromise.huisnummer,
        resultPromise.woonplaats,
        resultPromise.land,
        resultPromise.datumvan,
        resultPromise.datumtot,
        kamernaam,
        resultPromise.inchecken,
        resultPromise.uitchecken,
        resultPromise.personen,
        resultPromise.prijs,
        reserveringsnummer,
        resultPromise.korting
      ));
    });

  }

  showAvailableRoomsModal(){
    //reset the bucket and selected rooms
    this.resetInitialValues();
    const modalKamerSearch = this.modalService.open(FormKamersbeschikbaarComponent);
    modalKamerSearch.result.then(
      result => {
        //this.closeResult = `Closed with: ${result}`;
      this.datumvan = result.datumvan;
      this.datumtot = result.datumtot;
      this.calculateNumberofDays(this.datumvan, this.datumtot);
      this.roomservice.searchRoom(true, result.datumvan, result.datumtot, result.kamertype);
      this.showResButton = true
      },
      reason => {
        this.calculateNumberofDays(this.datumvan, this.datumtot);
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }
  calculateNumberofDays(datumvan: string, datumtot: string){
    this.numberOfDays = (new Date(this.datumtot).getTime() - new Date(this.datumvan).getTime())/(1000 * 60 * 60 * 24);
    if(this.numberOfDays === 0){
      this.numberOfDays = 1;
    }
  }

  resetInitialValues(){
    this.reserverRooms = [];
    this.numberOfDays = 0;
    this.myCheckbox.setValue(false);
    this.totalPrice = 0;
    this.roomSelected = [false];

  }
}
