import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gerecht } from '../models/gerecht';
import { BehaviorSubject } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GerechtenService {
  private readonly api: string = '/api/restaurant/gerechten';

  public readonly gerechten$ = new BehaviorSubject<Gerecht[]>([]);
  public readonly paginatedGerechten$ = new BehaviorSubject<Gerecht[]>([]);
  public readonly total$ = new BehaviorSubject<number>(0);

  public _pageSize: number = 4;
  public _page: number = 1;

  constructor(private http: HttpClient) {
    this.getAllGerechten();
  }

  get page() { return this._page; }
  set page(page: number) {
    this._page = page;
    this.paginateGerechten();
  }

  get pageSize() { return this._pageSize; }
  set pageSize(pageSize: number) {
    this._pageSize = pageSize;
    this.paginateGerechten();
  }

  private static gerechtenResponseToGerechtMapper(gerechtenResponse: IGerechtenResponse): Gerecht[] {
    return gerechtenResponse.gerechten.map(GerechtenService.gerechtToGerechtMapper);
  }

  private static gerechtToGerechtMapper(gerecht: IGerecht): Gerecht {
    return new Gerecht(gerecht.naam, gerecht.type, gerecht.subtype, gerecht.prijs, gerecht.id);
  }

  getAllGerechten(): void {
    this.http.get<IGerechtenResponse>(this.api)
      .pipe(
        take(1),
        map(GerechtenService.gerechtenResponseToGerechtMapper),
        tap(gerechten => {
          this.gerechten$.next(gerechten);
          this.total$.next(gerechten.length);
          this.paginateGerechten();
        })
      )
      .subscribe();
  }

  paginateGerechten(): void {
    this.paginatedGerechten$.next(this.gerechten$.getValue().slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize));
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
