import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activiteiten',
  templateUrl: './activiteiten.component.html',
  styleUrls: ['./activiteiten.component.scss']
})
export class ActiviteitenComponent implements OnInit {
  images = [
    'assets/img/activiteit_wandel.png',
    'assets/img/activiteit_wijn.png',
    'assets/img/activiteit_zeilen.png'
  ];

  closeResult = '';

  constructor() {}

  ngOnInit() {}
}
