import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { Kamer} from 'src/app/models/kamer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RoomService } from 'src/app/services/rooms.service';
import { KamerreserveringenService } from 'src/app/services/kamerreserveringen.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { DateFunctions } from 'src/app/shared/services/date-functions';
import { FormControl } from '@angular/forms';
import { ManagementPortalKamersFormComponent } from '../kamers-form/kamers-form.component';
import { FormKamersbeschikbaarComponent } from '../kamers-form/form-kamersbeschikbaar/form-kamersbeschikbaar.component';

/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-kamer-tabel',
  templateUrl: './kamer-tabel.component.html',
  styleUrls: ['./kamer-tabel.component.scss'],

})
export class KamerTabelComponent implements OnInit {

@Input() public kamers$?: Observable<Kamer[]>;
public selectedKamer?: Kamer;

  public displayedColumns: string[] = [
    "kamerNaam",
    "kamerType",
    "kamerLigging",
    "aantalPersonen",
    "prijs",
    "customColumn"
  ];

  public dataSource$?: Observable<MatTableDataSource<Kamer>>;
  soortkamer = ["Budget", "Standaard", "Lux"];
  closeResult: string = "";
  showResButton: boolean = false;
  datumvan: string = '';
  datumtot: string = '';
  numberOfDays: number = 0;
  totalPrice: number = 0;
  myCheckbox: FormControl = new FormControl();
  reserverRooms: Kamer[] = [];
  constructor(
    private roomservice: RoomService,
    private kamerreserveringservice: KamerreserveringenService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private datetime: DateFunctions,
  ) {}


  //@ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource$ = this.kamers$ && this.kamers$.pipe(
      map(kamers => new MatTableDataSource(kamers)),
      map(metaDataSource => {
        metaDataSource.sort = this.sort
        return metaDataSource;
      })
    );

  }

  onSelect(kamer: Kamer): void {
    this.selectedKamer = kamer;
  }

  deleteRoom(kamer: Kamer) {
    if (this.kamers$) {
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
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
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
  resetInitialValues(): any {
    throw new Error("Method not implemented.");
  }
  calculateNumberofDays(datumvan: string, datumtot: string): any {
    throw new Error("Method not implemented.");
  }
}
