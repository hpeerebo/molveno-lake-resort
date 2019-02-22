import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../models/ingredient';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngredientenService {
  public readonly api: string = 'http://www.mocky.io/v2/5c6fe74a38000052003fca7d';

  constructor(private http: HttpClient) { }

  private static ingredientenResponseToIngredientMapper(ingredientenResponse: IIngredientenResponse): Ingredient[] {
    return ingredientenResponse.ingredienten.map(IngredientenService.ingredientToIngredientMapper);
  }

  private static ingredientToIngredientMapper(ingredient: IIngredient): Ingredient {
    return new Ingredient(ingredient.naam, ingredient.soort, ingredient.prijs);
  }

  getAllIngredienten(): Observable<Ingredient[]> {
    return this.http.get<IIngredientenResponse>(this.api)
      .pipe(
        map(IngredientenService.ingredientenResponseToIngredientMapper)
      );
  }
}

interface IIngredientenResponse {
  ingredienten: IIngredient[];
}

interface IIngredient {
  naam: string;
  soort: string;
  prijs: number;
}
