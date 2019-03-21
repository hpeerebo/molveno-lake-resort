import { Component, OnInit, Input } from '@angular/core';
import { GastKamerReservering } from '../../models/gast-kamerreservering';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { GastKamerReserveringFormGroup } from './gast-kamerreserveringformgroup';

import { Kamer } from 'src/app/models/kamer'
import { RoomService } from 'src/app/services/rooms.service';
import { Observable } from 'rxjs';
import { tap, take, takeLast } from 'rxjs/operators';

@Component({
  selector: 'app-gast-kamerreservering',
  templateUrl: './gast-kamerreservering.component.html',
  styleUrls: ['./gast-kamerreservering.component.scss']
})
export class GastKamerReserveringComponent implements OnInit {
  public kamertype: string = '';
  // public capacity: number | undefined = undefined;
  // public kamers: any;
  // public roomsForTwo: any;
  // public roomsForThree: any;
  // public roomsForFour: any;
  
  public readonly capacity2: number = 2;
  public readonly capacity3: number = 3;
  public readonly capacity4: number = 4;
  refreshCache: boolean = true;

  gastkamerreservering: GastKamerReservering | undefined = undefined;
  submitted = false;
  public kamerreserveringForm = new GastKamerReserveringFormGroup();

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder,  private modalService: NgbModal, private roomservice: RoomService,) {}

  showRoomsByCapacity(capacity: number){
    return this.roomservice.searchRoomByCapacity(this.refreshCache, capacity).subscribe();
  }

  showRoomsByDateAndCapacity(datumvan: string, datumtot: string, capacity: number){
    return this.roomservice.searchRoomByDateAndCapacity(this.refreshCache, datumvan, datumtot, capacity).subscribe();
  }


  //public kamers: Observable<Kamer[] | undefined> = this.roomservice.getRoom();
  public readonly roomsForTwo: Observable<Kamer[] | undefined> = this.roomservice.searchRoomByCapacity(true, 2).pipe(take(1),tap(rooms => console.log(2,rooms)));
  
  public readonly roomsForThree: Observable<Kamer[] | undefined> =  this.roomservice.searchRoomByCapacity(true, 3).pipe(take(2),takeLast(1),tap(rooms => console.log(3,rooms)));
  
  public readonly roomsForFour: Observable<Kamer[] | undefined> =  this.roomservice.searchRoomByCapacity(true, 4).pipe(take(3),takeLast(1),tap(rooms => console.log(4,rooms)));

  ngOnInit() {

    this.roomsForTwo.subscribe()
    this.roomsForThree.subscribe()
    this.roomsForFour.subscribe()

    

    //this.kamers = this.showRoomsByType();

// console.log('rooms for 2: ', this.roomsForTwo)
// console.log('rooms for 3: ', this.roomsForThree)
// console.log('rooms for 4: ', this.roomsForFour)

    if (this.gastkamerreservering) {
      this.kamerreserveringForm.setValue({
        voornaam: this.gastkamerreservering.voornaam,
        achternaam: this.gastkamerreservering.achternaam,
        telefoonnummer: this.gastkamerreservering.telefoonnummer,
        emailadres: this.gastkamerreservering.emailadres,
        identiteitsid: this.gastkamerreservering.identiteitsid,
        aantalpersonen: this.gastkamerreservering.aantalpersonen,
        postcode: this.gastkamerreservering.postcode,
        straat: this.gastkamerreservering.straat,
        huisnummer: this.gastkamerreservering.huisnummer,
        woonplaats: this.gastkamerreservering.woonplaats,
        land: this.gastkamerreservering.land,
        datumvan: this.gastkamerreservering.datumvan,
        datumtot: this.gastkamerreservering.datumtot,
        kamernaam: this.gastkamerreservering.kamernaam,
        inchecken: this.gastkamerreservering.inchecken,
        uitchecken: this.gastkamerreservering.uitchecken,
        personen: this.gastkamerreservering.personen,
        prijs: this.gastkamerreservering.prijs,
        reserveringsnummer: this.gastkamerreservering.reserveringsnummer
      });
    }
  }

  submitForm() {
    this.activeModal.close(new GastKamerReservering(
      this.kamerreserveringForm.value.id,
      this.kamerreserveringForm.value.voornaam,
      this.kamerreserveringForm.value.achternaam,
      this.kamerreserveringForm.value.telefoonnummer,
      this.kamerreserveringForm.value.emailadres,
      this.kamerreserveringForm.value.identiteitsid,
      this.kamerreserveringForm.value.aantalpersonen,
      this.kamerreserveringForm.value.postcode,
      this.kamerreserveringForm.value.straat,
      this.kamerreserveringForm.value.huisnummer,
      this.kamerreserveringForm.value.woonplaats,
      this.kamerreserveringForm.value.land,
      this.kamerreserveringForm.value.datumvan,
      this.kamerreserveringForm.value.datumtot,
      this.kamerreserveringForm.value.kamernaam,
      this.kamerreserveringForm.value.inchecken,
      this.kamerreserveringForm.value.uitchecken,
      this.kamerreserveringForm.value.personen,
      this.kamerreserveringForm.value.prijs,
      this.kamerreserveringForm.value.reserveringsnummer
    ));
    location.reload();
  }

}
