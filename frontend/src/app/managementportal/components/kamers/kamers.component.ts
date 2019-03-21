import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import { RoomService } from "src/app/services/rooms.service";
import { Kamer } from "../../../models/kamer";
import { Observable } from "rxjs";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ManagementPortalKamersFormComponent } from "./kamers-form/kamers-form.component";
import { FormKamerreserveringComponent } from './kamers-form/form-kamerreservering/form-kamerreservering.component';
import { KamerreserveringenService } from 'src/app/services/kamerreserveringen.service';
import {KamerReservering} from "../../../models/kamerreservering";
import { FormKamersbeschikbaarComponent } from './kamers-form/form-kamersbeschikbaar/form-kamersbeschikbaar.component';
import {ActivatedRoute} from "@angular/router";
import { FormControl } from '@angular/forms';


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
    private route: ActivatedRoute
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
  //marked = false;
  //theCheckbox = false;

  public clickColumnHandler(event: string): string {
    this.field = event;
    return this.field;
  }

  ngOnInit() {

  }

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

  onSelect(kamer: Kamer): void {
    this.selectedKamer = kamer;
  }
  onSelectRoom(kamer: Kamer): void {
    if (this.myCheckbox.value){
      this.reserverRooms = [...this.reserverRooms, kamer];
      this.totalPrice = this.totalPrice + (this.numberOfDays * kamer.prijs);
    }
    if (!this.myCheckbox.value){
      this.reserverRooms = this.reserverRooms.filter(element => kamer.kamerNaam !== element.kamerNaam);
      this.totalPrice = this.totalPrice - (this.numberOfDays * kamer.prijs);
    }
  }
  deleteRoomFromBucket(kamer: Kamer){
    this.reserverRooms = this.reserverRooms.filter(element => kamer.kamerNaam !== element.kamerNaam);
    this.myCheckbox.setValue(false);
    this.onSelectRoom(kamer);


  }
  /* toggleVisibility(event:any){
    this.marked= event.target.checked;
    console.log(this.marked);
    console.log(this.theCheckbox);
  } */

  deleteRoom(kamer: Kamer) {
    if (this.kamers) {
      this.roomservice.deleteRoom(kamer);
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

  openNewFormModal() {
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
  }

  openEditFormModal() {
    const modalRef = this.modalService.open(ManagementPortalKamersFormComponent, {
      size: "lg",
      ariaLabelledBy: "modal-basic-title"
    });
    modalRef.componentInstance.model = this.selectedKamer;
    modalRef.componentInstance.action = "edit";

    modalRef.result.then(resultPromise => {
      //this.closeResult = resultPromise;
      this.roomservice.updateRoom(new Kamer(
        resultPromise.kamerNaam,
        resultPromise.kamerType,
        resultPromise.kamerLigging,
        resultPromise.aantalPersonen,
        resultPromise.prijs
      ));
    });

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
  openFormKamerToReserveMultipleRooms(kamers: Kamer[]){
    const modalKamerReservering = this.modalService.open(FormKamerreserveringComponent);
    if (this.datumvan) {
      modalKamerReservering.componentInstance.datumvan = this.datumvan;
    }
    if (this.datumtot) {
      modalKamerReservering.componentInstance.datumtot = this.datumtot;
    }
    modalKamerReservering.result.then(resultPromise => {
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
        resultPromise.personen,
        resultPromise.prijs,
        resultPromise.reserveringsnummer
      ))});
    });

  }
  openFormKamerReserveringModal(kamernaam: string){
    const modalKamerReservering = this.modalService.open(FormKamerreserveringComponent);

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
        resultPromise.reserveringsnummer
      ));
    });

  }

  showAvailableRoomsModal(){
    const modalKamerSearch = this.modalService.open(FormKamersbeschikbaarComponent);
    modalKamerSearch.result.then(
      result => {
        //this.closeResult = `Closed with: ${result}`;
      this.datumvan = result.datumvan;
      this.datumtot = result.datumtot;
      this.calculateNumberofDays(this.datumvan, this.datumtot)
      this.roomservice.searchRoom(true, result.datumvan, result.datumtot, result.kamertype);
      this.showResButton = true
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }
  calculateNumberofDays(datumvan: string, datumtot: string){

    const date1 = this.convertDate(new Date(datumvan));
    const date2 = this.convertDate(new Date(datumtot));

    this.numberOfDays = parseInt(date2)- parseInt(date1)
    if(this.numberOfDays === 0){
      this.numberOfDays = 1;
    }
    //console.log(`${date1.getFullYear()} + ${date1.getMonth()} + ${date1.getDay()}`);

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
}
