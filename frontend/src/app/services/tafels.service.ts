import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Tafel } from '../models/tafel';
import { HttpClient } from '@angular/common/http';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TafelsService {
  public readonly api: string = '/api/restaurant/tafels';

  public readonly tafelCache = new BehaviorSubject<Tafel[] | undefined>(undefined);

  constructor(private http: HttpClient) { }

  private static tafelsResponseToTafelMapper(tafelsResponse: ITafelsResponse): Tafel[] {
    return tafelsResponse.tafels.map(TafelsService.tafelToTafelMapper);
  }

  private static tafelToTafelMapper(tafel: ITafel): Tafel {
    return new Tafel(tafel.kenmerk, tafel.personen);
  }

  getAllTafels(refreshCache: boolean = false): Observable<Tafel[] | undefined> {
    if (this.tafelCache.getValue() === undefined || refreshCache) {
      this.http.get<ITafelsResponse>(this.api)
        .pipe(
          take(1),
          map(TafelsService.tafelsResponseToTafelMapper),
          tap(tafels => this.tafelCache.next(tafels))
        ).subscribe()
    }
    return this.tafelCache;
  }

  addNewTafel(tafel: Tafel): void {
    this.http.post(this.api, tafel)
      .pipe(
        take(1),
        tap(() => this.getAllTafels(true))
      ).subscribe()
  }
}

interface ITafelsResponse {
  tafels: ITafel[];
}

interface ITafel {
  kenmerk: string;
  personen: number;
}
