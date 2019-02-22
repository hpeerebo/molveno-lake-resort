import { Component, OnInit } from '@angular/core';
import { IngredientenService } from 'src/app/services/ingredienten.service';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-ingredienten',
  templateUrl: './ingredienten.component.html',
  styleUrls: ['./ingredienten.component.scss']
})
export class IngredientenComponent {
  public ingredienten: Observable<Ingredient[]> = this.ingredientenService.getAllIngredienten();

  constructor(private ingredientenService: IngredientenService) {}
}
