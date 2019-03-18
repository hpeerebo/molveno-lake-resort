import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kamers',
  templateUrl: './kamers.component.html',
  styleUrls: ['./kamers.component.scss']
})
export class KamersComponent implements OnInit {
  @Input() public siteLanguage: string = '';
  
  alignLeft: string = 'order-md-1';
  alignRight: string = 'order-md-2';
  

  public readonly roomlist = [
    { roomtype: 'Budget kamer', roomprice: 'Vanaf € 35,-', image: 'assets/img/room_budget.jpg', thumbimage: 'assets/img/thumb_room_budget.jpg',  carouselimage: 'assets/img/carousel_room_budget.jpg', alignText: `col-md-7 ${this.alignLeft}`, alignImage: `col-md-5 ${this.alignRight}`,
      text: 'Een warme en stijlvolle hotelkamer met eigen balkon. De kamer beschikt over een bureau, flatscreen televisie en een radio. De badkamer is ingericht met een douche in bad, toilet en föhn.' },
    { roomtype: 'Standaard kamer', roomprice: 'Vanaf € 50,-', image: 'assets/img/room_standard.jpg', thumbimage: 'assets/img/thumb_room_standard.jpg',  carouselimage: 'assets/img/carousel_room_standard.jpg', alignText: `col-md-7 ${this.alignRight}`, alignImage: `col-md-5 ${this.alignLeft}`,
      text: 'De ruime suite beschikt over een apart zitgedeelte en balkon met uitzicht op het bos. De hotelkamer beschikt over koffie- en theefaciliteiten, een badkamer met douche in bad en toilet.' },
    { roomtype: 'Luxe kamer', roomprice: 'Vanaf € 65,-', image: 'assets/img/room_luxury.jpg', thumbimage: 'assets/img/thumb_room_luxury.jpg',  carouselimage: 'assets/img/carousel_room_luxury.jpg', alignText: `col-md-7 ${this.alignLeft}`, alignImage: `col-md-5 ${this.alignRight}`,
      text: 'Een ruim ingerichte kamer met terras. Voorzien van een bureau, flatscreen televisie en radio. De kamer beschikt over koffie en theefaciliteiten. In de badkamer tref je een douche in bad, toilet en föhn.' },
  ];
  
  constructor() {}

  ngOnInit() {}

}
