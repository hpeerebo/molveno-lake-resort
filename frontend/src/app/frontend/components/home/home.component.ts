import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = ['assets/img/room.jpg', 'assets/img/restaurant.jpg', 'assets/img/activity.jpg'];

  constructor() {}

  ngOnInit() {}
}
