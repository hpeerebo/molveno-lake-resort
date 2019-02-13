import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class BackEndRestaurantComponent implements OnInit {
  tafels: any[] = [
    { tafelNummer: 1, aantalPersonen: 4 },
    { tafelNummer: 2, aantalPersonen: 4 },
    { tafelNummer: 3, aantalPersonen: 2 },
    { tafelNummer: 4, aantalPersonen: 4 },
    { tafelNummer: 5, aantalPersonen: 4 },
    { tafelNummer: 6, aantalPersonen: 6 },
    { tafelNummer: 7, aantalPersonen: 2 },
    { tafelNummer: 8, aantalPersonen: 4 },
    { tafelNummer: 9, aantalPersonen: 4 },
    { tafelNummer: 10, aantalPersonen: 2 },
    { tafelNummer: 11, aantalPersonen: 4 },
    { tafelNummer: 12, aantalPersonen: 4 },
    { tafelNummer: 13, aantalPersonen: 6 },
    { tafelNummer: 14, aantalPersonen: 2 },
    { tafelNummer: 15, aantalPersonen: 2 }
  ];
  constructor() { }

  ngOnInit() {
  }

}
class Tafel {
  public tafelNummer: number;
  public aantalPersonen: number;

  constructor(tafelNummer: number, aantalPersonen: number) {
      this.tafelNummer = tafelNummer;
      this.aantalPersonen = aantalPersonen;
  }
}