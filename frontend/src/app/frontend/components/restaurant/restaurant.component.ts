import { Component, OnInit } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { GerechtenService } from 'src/app/services/gerechten.service';
import { Observable } from 'rxjs';
import { Gerecht } from 'src/app/models/gerecht';
import { filter, map } from 'rxjs/operators';
import { TafelreserveringenService } from 'src/app/services/tafelreserveringen.service';
import { Tafelreservering } from 'src/app/models/tafelreservering';
import { FormTafelreserveringComponent } from 'src/app/shared/components/form-tafelreservering/form-tafelreservering.component';

@Component({
  selector: "app-restaurant",
  templateUrl: "./restaurant.component.html",
  styleUrls: ["./restaurant.component.scss"]
})
export class RestaurantComponent implements OnInit {
  images = [
    "assets/img/dishes/car1.jpg",
    "assets/img/dishes/car2.jpg",
    "assets/img/dishes/car3.jpg"
  ];
  closeResult = "";

  public gerechten$: Observable<Gerecht[]> = this.gerechtenService.gerechten$;
  public filteredGerechten$: Observable<Gerecht[]> = new Observable();

  constructor(
    private gerechtenService: GerechtenService,
    private tafelreserveringenService: TafelreserveringenService,
    private modalService: NgbModal
    ) {
    this.filterGerechten('voorgerecht');
   }

   openFormTafelreserveringModal(tafelreservering?: Tafelreservering) {
    const modal = this.modalService.open(FormTafelreserveringComponent);

    if (tafelreservering) {
      modal.componentInstance.tafelreservering = tafelreservering;
    }

    modal.result
      .then(result => {
        if (result.id) {
          this.tafelreserveringenService.updateTafelreservering(result);
        } else {
          this.tafelreserveringenService.addNewReservering(result);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  public filterGerechten(filter: string): void {
    this.filteredGerechten$ = this.gerechten$.pipe(
      map(gerechten => gerechten.filter(gerecht => gerecht.type.toLowerCase() === filter.toLowerCase()))
    )
  };

  ngOnInit() { }
}
