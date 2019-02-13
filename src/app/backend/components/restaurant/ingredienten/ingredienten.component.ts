import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredienten',
  templateUrl: './ingredienten.component.html',
  styleUrls: ['./ingredienten.component.scss']
})
export class IngredientenComponent {

  backendData = [
    { naam: 'Aardappelen', soort: 'nog te bepalen', prijs: 13.50 },
    { naam: 'Bleekselderij', soort: 'nog te bepalen', prijs: 13.50 },
    { naam: 'Broccoli', soort: 'nog te bepalen', prijs: 13.50 },
    { naam: 'Courgette', soort: 'nog te bepalen', prijs: 13.50 },
    { naam: 'Fazant', soort: 'nog te bepalen', prijs: 13.50 },
    { naam: 'Forel', soort: 'nog te bepalen', prijs: 13.50 },
    { naam: 'Kaas', soort: 'nog te bepalen', prijs: 13.50 },
    { naam: 'Knoflook', soort: 'nog te bepalen', prijs: 13.50 },
    { naam: 'Krab', soort: 'nog te bepalen', prijs: 13.50 },
    { naam: 'Linzen', soort: 'nog te bepalen', prijs: 13.50 },
    { naam: 'Prei', soort: 'nog te bepalen', prijs: 13.50 },
    { naam: 'Runderhaas', soort: 'nog te bepalen', prijs: 13.50 },
    { naam: 'Venkel', soort: 'nog te bepalen', prijs: 13.50 }
  ];

  ingredienten: Ingredient[] = this.backendData.map(data => new Ingredient(data.naam, data.soort, data.prijs));

}

class Ingredient {
  constructor(public naam: string, public soort: string, public prijs: number) { }
}
