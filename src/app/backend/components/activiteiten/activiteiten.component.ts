import {
  Component,
  OnInit,
  Directive,
  Input,
  Output,
  ViewChildren,
  QueryList
} from "@angular/core";
import { ActiviteitenService } from "src/app/services/activiteiten.service";
import { Kamer } from "./kamer";
import { Subscription } from "rxjs";
import { take, tap } from "rxjs/operators";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { activiteitenFormComponent } from "./activiteiten-form/activiteiten-form.component";
import { Activiteit } from 'src/app/models/activiteit';

@Component({
  selector: "app-activiteiten",
  templateUrl: "./activiteiten.component.html",
  styleUrls: ["./activiteiten.component.scss"]
})
//export let activiteiten:Kamer[] = [];
export class BackEndactiviteitenComponent implements OnInit {
  //public activiteiten :KamerResponse[] = [];
  public activiteiten: Activiteit[] | undefined = [];
  show: string = "";
  public selectedActiviteit?: Activiteit;
  soortactiviteit = ["Budget", "Standaard", "Lux"];
  closeResult: string = "";
  private subscriptions: Subscription = new Subscription();
  constructor(
    private actservice: ActiviteitenService,
    private modalService: NgbModal
  ) {}
  ngOnInit() {
    this.getAct();
  }

  getAct() {
    //this.actservice.getAct().subscribe(result => this.activiteiten = result);
    this.actservice
      .getAct()
      .pipe(
        take(1),
        tap(result => (this.activiteiten = result))
      )
      .subscribe();
  }
  onSelect(activiteit: Activiteit): void {
    this.selectedActiviteit = activiteit;
  }
  showReservedAct() {
    // this.activiteiten = [...this.activiteiten].filter(item => item.status==="reserved");
    this.show = "reserved";
  }
  showFreeAct() {
    this.show = "free";
  }
  showAllAct() {
    this.show = "all";
  }
  showBookedAct() {
    this.show = "booked";
  }

  deleteAct(activiteit: Activiteit) {
    if (this.activiteiten) {
      this.activiteiten = [...this.activiteiten].filter(item => item !== activiteit);
    }
  }
  addAct(activiteit: Activiteit) {
    //let lengte = this.activiteiten.push(kamer);
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
    const modalRef = this.modalService.open(activiteitenFormComponent, {
      size: "lg",
      ariaLabelledBy: "modal-basic-title"
    });
    modalRef.result.then(resultPromise => {
      this.closeResult = resultPromise;
      if (this.activiteiten) {
        this.activiteiten.push(
          new Activiteit(
            resultPromise.activiteitNummer,
            resultPromise.activiteitNaam,
            resultPromise.activiteitDatum,
            resultPromise.aantalPersonen,
            resultPromise.prijs
          )
        );
      }
    });
    console.log("result = " + this.closeResult);
    console.log("activiteiten = " + this.activiteiten);
  }
  openEditFormModal() {
    const modalRef = this.modalService.open(activiteitenFormComponent, {
      size: "lg",
      ariaLabelledBy: "modal-basic-title"
    });
    modalRef.componentInstance.model = this.selectedActiviteit;

    modalRef.result.then(resultPromise => {
      //this.closeResult = resultPromise;
      (this.activiteiten = this.activiteiten),
        new Kamer(
          resultPromise.activiteitNummer,
          resultPromise.activiteitNaam,
          resultPromise.activiteitDatum,
          resultPromise.aantalPersonen,
          resultPromise.prijs
        );
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
  onActSubmitted(act: Activiteit) {
    console.log(act);
  }
}
