import { Component } from '@angular/core';

@Component({
  selector: 'app-tafels',
  templateUrl: './tafels.component.html',
  styleUrls: ['./tafels.component.scss']
})
export class TafelsComponent {

  backendData = [
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

  tafels: Tafel[] = this.backendData.map(data => new Tafel(data.tafelNummer, data.aantalPersonen));

}

class Tafel {
  constructor(public nummer: number, public personen: number) { }
}
