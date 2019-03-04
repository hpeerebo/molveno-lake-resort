import {
  Component,
  OnInit,
  Directive,
  Input,
  Output,
  ViewChildren,
  QueryList
} from "@angular/core";
import { RoomService } from "src/app/services/rooms.service";
import { Kamer } from "../../../models/kamer";
import { Subscription } from "rxjs";
import { take, tap } from "rxjs/operators";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ManagementPortalKamersFormComponent } from "./kamers-form/kamers-form.component";

@Component({
  selector: "app-kamers",
  templateUrl: "./kamers.component.html",
  styleUrls: ["./kamers.component.scss"]
})
//export let kamers:Kamer[] = [];
export class ManagementPortalKamersComponent implements OnInit {
  //public kamers :KamerResponse[] = [];
  public kamers: Kamer[] | undefined = [];
  show: string = "";
  public selectedKamer?: Kamer;
  soortkamer = ["Budget", "Standaard", "Lux"];
  closeResult: string = "";
  private subscriptions: Subscription = new Subscription();
  constructor(
    private roomservice: RoomService,
    private modalService: NgbModal
  ) {}
  ngOnInit() {
    this.getRoom();
  }

  getRoom() {
    //this.roomservice.getRoom().subscribe(result => this.kamers = result);
    this.roomservice
      .getRoom()
      .pipe(
        take(1),
        tap(result => (this.kamers = result))
      )
      .subscribe();
  }
  onSelect(kamer: Kamer): void {
    this.selectedKamer = kamer;
  }
  showReservedRooms() {
    // this.kamers = [...this.kamers].filter(item => item.status==="reserved");
    this.show = "reserved";
  }
  showFreeRooms() {
    this.show = "free";
  }
  showAllRooms() {
    this.show = "all";
  }
  showBookedRooms() {
    this.show = "booked";
  }

  deleteRoom(kamer: Kamer) {
    if (this.kamers) {
      this.roomservice.deleteRoom(kamer);
      //this.kamers = [...this.kamers].filter(item => item !== kamer);
    }
  }
  addRoom(kamer: Kamer) {
    //let lengte = this.kamers.push(kamer);
  }
  open(content: NgbModal) {
    this.modalService
      .open(content, { size: "lg", ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
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
      this.closeResult = resultPromise;
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
  onRoomSubmitted(room: Kamer) {
    console.log(room);
  }
}
