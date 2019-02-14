import { Component, OnInit } from '@angular/core';
import { RoomsService, KamerResponse, Kamer } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-kamers',
  templateUrl: './kamers.component.html',
  styleUrls: ['./kamers.component.scss']
})
export class BackEndKamersComponent implements OnInit {
  //public kamers :KamerResponse[] = [];
  public kamers :Kamer[] = [];
  show = true;
  variable = 1
 // constructor() { }
 constructor(private roomservice: RoomsService){
  
  roomservice.getRoom().subscribe(result => this.kamers = result);
  //roomservice.getRoom().subscribe(result => this.kamers);
  //console.log(this.kamers);
}
showReservedRooms(){
  this.kamers = [];
}

  ngOnInit() {
  }

}
