import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gerecht } from '../models/gerecht';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { GerechtDetails } from '../models/gerecht-details';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class GerechtenService {
  private readonly api: string = '/api/restaurant/gerechten';

  public readonly gerechten$ = new BehaviorSubject<Gerecht[]>([]);
  public readonly gerechtDetails$ = new BehaviorSubject<GerechtDetails | undefined>(undefined);

  constructor(private http: HttpClient) {
    this.getAllGerechten();
  }

  private static gerechtenResponseToGerechtMapper(gerechtenResponse: IGerechtenResponse): Gerecht[] {
    return gerechtenResponse.gerechten.map(GerechtenService.gerechtToGerechtMapper);
  }

  private static gerechtToGerechtMapper(gerecht: IGerecht): Gerecht {
    return new Gerecht(gerecht.naam, gerecht.type, gerecht.subtype, gerecht.prijs, gerecht.id);
  }

  private static gerechtDetailsResponseToGerechtDetailsMapper(gerechtDetailResponse: IGerechtDetailsResponse): GerechtDetails {
    return new GerechtDetails(
      gerechtDetailResponse.id,
      gerechtDetailResponse.naam,
      gerechtDetailResponse.type,
      gerechtDetailResponse.subtype,
      gerechtDetailResponse.prijs,
      gerechtDetailResponse.ingredienten
    );
  }

  getAllGerechten(): void {
    this.http
      .get<IGerechtenResponse>(this.api)
      .pipe(
        take(1),
        map(GerechtenService.gerechtenResponseToGerechtMapper),
        tap(gerechten => this.gerechten$.next(gerechten))
      )
      .subscribe();
  }

  getGerechtDetails(id: number): void {
    this.gerechtDetails$.next(undefined);
    this.http
      .get<IGerechtDetailsResponse>(`${this.api}/${id}`)
      .pipe(
        take(1),
        map(GerechtenService.gerechtDetailsResponseToGerechtDetailsMapper),
        tap(gerechtDetails => this.gerechtDetails$.next(gerechtDetails))
      )
      .subscribe()
  }

  addNewGerecht(gerecht: Gerecht): void {
    this.http
      .post(this.api, gerecht)
      .pipe(
        take(1),
        tap(() => this.getAllGerechten())
      )
      .subscribe();
  }

  addIngredientToGerecht(gerechtId: number, ingredient: Ingredient): void {
    const body = { id: ingredient.id };
    this.http
      .post<IGerechtDetailsResponse>(`${this.api}/${gerechtId}/ingredienten`, body)
      .pipe(
        take(1),
        map(GerechtenService.gerechtDetailsResponseToGerechtDetailsMapper),
        tap(gerechtDetails => this.gerechtDetails$.next(gerechtDetails))
      )
      .subscribe()
  }

  updateGerecht(gerecht: Gerecht): void {
    this.http
      .put(`${this.api}/${gerecht.id}`, gerecht)
      .pipe(
        take(1),
        tap(() => this.getAllGerechten())
      )
      .subscribe();
  }

  deleteGerecht(gerecht: Gerecht): void {
    this.http
      .delete(`${this.api}/${gerecht.id}`)
      .pipe(
        take(1),
        tap(() => this.getAllGerechten())
      )
      .subscribe();
  }
}

interface IGerechtenResponse {
  gerechten: IGerecht[];
}

interface IGerecht {
  id: number;
  naam: string;
  type: string;
  subtype: string;
  prijs: number;
}

interface IIngredient {
  id: number;
  naam: string;
  eenheid: string;
  prijs: number;
}

interface IGerechtDetailsResponse extends IGerecht {
  ingredienten: IIngredient[];
}
