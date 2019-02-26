import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kamers',
  templateUrl: './kamers.component.html',
  styleUrls: ['./kamers.component.scss']
})
export class KamersComponent implements OnInit {

  images = ['assets/img/room-luxe.jpg', 'assets/img/restaurant.jpg','assets/img/room-budget.jpg' ];

  constructor() { }

  ngOnInit() {
  }

}
