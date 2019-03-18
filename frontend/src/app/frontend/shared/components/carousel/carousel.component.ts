import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'frontend-carousel-item',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() public roomlist: any;   

  constructor() {}

  ngOnInit() {
  }

}
