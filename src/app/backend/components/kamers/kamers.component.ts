import { Component, OnInit, Directive, Input, Output, ViewChildren, QueryList } from '@angular/core';
import { RoomsService, KamerResponse, Kamer } from 'src/app/services/rooms.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-kamers',
  templateUrl: './kamers.component.html',
  styleUrls: ['./kamers.component.scss']
})
export class BackEndKamersComponent implements OnInit {
  //public kamers :KamerResponse[] = [];
  public kamers :Kamer[] = [];
  show:string = "";
 // constructor() { }
 constructor(private roomservice: RoomsService){
  
  roomservice.getRoom().subscribe(result => this.kamers = result);
  //roomservice.getRoom().subscribe(result => this.kamers);
  //console.log(this.kamers);
}
showReservedRooms(){
 // this.kamers = [...this.kamers].filter(item => item.status==="reserved");
 this.show = "reserved";
}
showFreeRooms(){
  this.show = "free";
 }
showAllRooms(){
  this.show = "all";
 }
 showBookedRooms(){
  this.show = "booked";
 }

 deleteRoom(kamer:Kamer){
  this.kamers = [...this.kamers].filter(item => item !== kamer);
 }
  ngOnInit() {
  }

}
