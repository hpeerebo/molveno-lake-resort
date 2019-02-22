import { Component } from '@angular/core';
import { Gerecht } from 'src/app/models/gerecht';

@Component({
  selector: 'app-gerechten',
  templateUrl: './gerechten.component.html',
  styleUrls: ['./gerechten.component.scss']
})
export class GerechtenComponent {

  backendData: GerechtResponse[] = [
    { naam: 'Salade Falafel', type: 'Voorgerecht', subtype: 'Koud', prijs: 13.50 },
    { naam: 'Salade Geitenkaas', type: 'Voorgerecht', subtype: 'Koud',prijs: 14.50 },
    { naam: 'Salade Black Angus', type: 'Voorgerecht', subtype: 'Koud',prijs: 15.50 },
    { naam: 'Salade Sashimi', type: 'Voorgerecht', subtype: 'Koud',prijs: 15.50 },
    { naam: 'Salade Carpaccio', type: 'Voorgerecht', subtype: 'Koud',prijs: 14.50 },
    { naam: 'Hongaarse Varkensschnitzel', type: 'Hoofdgerecht', subtype: 'Vlees',prijs: 18.50 },
    { naam: 'Varkenshaassaté', type: 'Hoofdgerecht', subtype: 'Vlees',prijs: 21.50 },
    { naam: 'Sukade Steak', type: 'Hoofdgerecht', subtype: 'Vlees',prijs: 22.50 },
    { naam: 'Gevulde Varkenshaas', type: 'Hoofdgerecht', subtype: 'Vlees',prijs: 20.50 },
    { naam: 'Lamsrack', type: 'Hoofdgerecht', subtype: 'Vlees',prijs: 24.50 },
    { naam: 'Dame Blanche', type: 'Nagerecht', subtype: 'IJs',prijs: 7.00 },
    { naam: 'Creme Anglaise', type: 'Nagerecht', subtype: 'overig',prijs: 7.50 },
    { naam: 'Nutella Parfait', type: 'Nagerecht', subtype: 'overig',prijs: 7.50 },
    { naam: 'Creme Brulee Van Limoncello', type: 'Nagerecht', subtype: 'overig',prijs: 7.50 },
    { naam: 'Kaasplankje', type: 'Nagerecht', subtype: 'overig',prijs: 11.50 },
    { naam: 'Sinas', type: 'Drank', subtype: 'Fris',prijs: 3.00 },
    { naam: 'Bier', type: 'Drank', subtype: 'Alcohol',prijs: 3.00 },
    { naam: 'Whisky', type: 'Drank', subtype: 'Alcohol',prijs: 4.00 },
    { naam: 'Cola', type: 'Drank', subtype: 'Fris',prijs: 2.50 },
    { naam: 'Spa blauw', type: 'Drank', subtype: 'Fris',prijs: 1.50 },
    { naam: 'Spa citroen', type: 'Drank', subtype: 'Fris',prijs: 2.50 },
    { naam: 'Cognac', type: 'Drank', subtype: 'Alcohol' ,prijs: 4.50 },
    { naam: 'Wodka', type: 'Drank', subtype: 'Alcohol',prijs: 4.50 },
    { naam: 'Genever', type: 'Drank', subtype: 'Alcohol',prijs: 3.50 }
  ];

  gerechten: Gerecht[] = this.backendData.map(data => new Gerecht(data.naam, data.type, data.subtype, data.prijs));

}

interface GerechtResponse {
  naam: string;
  type: string;
  subtype: string;
  prijs: number;
}
