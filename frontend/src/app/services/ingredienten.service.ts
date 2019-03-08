import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Ingredient } from '../models/ingredient';
import { HttpClient } from '@angular/common/http';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngredientenService {
  private readonly api: string = '/api/restaurant/ingredienten';

  private readonly dataStore = new BehaviorSubject<Ingredient[]>([]);
  public readonly data$ = this.dataStore.asObservable();

  constructor(private http: HttpClient) {
    this.getAllIngredienten();
  }

  private static ingredientenResponseToIngredientMapper(ingredientenResponse: IIngredientenResponse): Ingredient[] {
    return ingredientenResponse.ingredienten.map(IngredientenService.ingredientToIngredientMapper);
  }

  private static ingredientToIngredientMapper(ingredient: IIngredient): Ingredient {
    return new Ingredient(ingredient.naam, ingredient.eenheid, ingredient.prijs, ingredient.id);
  }

  getAllIngredienten(): void {
    this.http.get<IIngredientenResponse>(this.api)
      .pipe(
        take(1),
        map(IngredientenService.ingredientenResponseToIngredientMapper),
        map(ingredienten => this.dataStore.next(ingredienten))
      )
      .subscribe();
  }

  addNewIngredient(ingredient: Ingredient): void {
    this.http
      .post(this.api, ingredient)
      .pipe(
        take(1),
        tap(() => this.getAllIngredienten())
      )
      .subscribe();
  }

  deleteIngredient(ingredient: Ingredient): void {
    this.http
      .delete(`${this.api}/${ingredient.id}`)
      .pipe(
        take(1),
        tap(() => this.getAllIngredienten())
      )
      .subscribe();
  }
}

interface IIngredientenResponse {
  ingredienten: IIngredient[];
}

interface IIngredient {
  id: number;
  naam: string;
  eenheid: string;
  prijs: number;
}
