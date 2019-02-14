import { Component } from '@angular/core';

@Component({
  selector: 'app-gerechten',
  templateUrl: './gerechten.component.html',
  styleUrls: ['./gerechten.component.scss']
})
export class GerechtenComponent {

  backendData: GerechtResponse[] = [
    { naam: 'Salade Falafel', type: 'Voorgerecht', prijs: 13.50 },
    { naam: 'Salade Falafel', type: 'Voorgerecht', prijs: 13.50 },
    { naam: 'Salade Falafel', type: 'Voorgerecht', prijs: 13.50 },
    { naam: 'Salade Falafel', type: 'Voorgerecht', prijs: 13.50 },
    { naam: 'Salade Falafel', type: 'Voorgerecht', prijs: 13.50 },
    { naam: 'Salade Falafel', type: 'Voorgerecht', prijs: 13.50 },
    { naam: 'Salade Falafel', type: 'Voorgerecht', prijs: 13.50 },
    { naam: 'Salade Falafel', type: 'Voorgerecht', prijs: 13.50 },
    { naam: 'Salade Falafel', type: 'Voorgerecht', prijs: 13.50 },
    { naam: 'Salade Falafel', type: 'Voorgerecht', prijs: 13.50 },
    { naam: 'Salade Falafel', type: 'Voorgerecht', prijs: 13.50 },
    { naam: 'Salade Falafel', type: 'Voorgerecht', prijs: 13.50 },
    { naam: 'Salade Falafel', type: 'Voorgerecht', prijs: 13.50 }
  ];

  gerechten: Gerecht[] = this.backendData.map(data => new Gerecht(data.naam, data.type, data.prijs));

}

interface GerechtResponse {
  naam: string;
  type: string;
  prijs: number;
}

class Gerecht {
  constructor(public naam: string, public type: string, public prijs: number) { }
}
