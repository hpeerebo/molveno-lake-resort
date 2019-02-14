import { Component } from '@angular/core';
import { Gerecht } from './gerecht';

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
