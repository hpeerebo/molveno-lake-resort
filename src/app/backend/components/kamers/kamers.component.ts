import { Component, OnInit, Directive, Input, Output, ViewChildren, QueryList } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';
import { Kamer } from './kamer';

@Component({
  selector: 'app-kamers',
  templateUrl: './kamers.component.html',
  styleUrls: ['./kamers.component.scss']
})
//export let kamers:Kamer[] = [];
export class BackEndKamersComponent implements OnInit {
  //public kamers :KamerResponse[] = [];
  public kamers :Kamer[] | undefined = [];
  show:string = "";
  selectedKamer : Kamer | undefined;
  soortkamer = ['Budget', 'Standaard','Lux'];
 constructor(private roomservice: RoomsService){
  //roomservice.getRoom().subscribe(result => this.kamers = result);

}
ngOnInit() {
  this.getRoom();
}

getRoom(){
  this.roomservice.getRoom().subscribe(result => this.kamers = result);
}
onSelect(kamer: Kamer): void {
  this.selectedKamer = kamer;
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
  //this.kamers = [...this.kamers].filter(item => item !==kamer);
 }
 addRoom(kamer:Kamer){
   //let lengte = this.kamers.push(kamer);
 }
}
