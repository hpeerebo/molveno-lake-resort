import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tafel } from '../models/tafel';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TafelsService {
  public readonly api: string = '/api/restaurant/tafels';

  constructor(private http: HttpClient) { }

  private static tafelsResponseToTafelMapper(tafelsResponse: ITafelsResponse): Tafel[] {
    return tafelsResponse.tafels.map(TafelsService.tafelToTafelMapper);
  }

  private static tafelToTafelMapper(tafel: ITafel): Tafel {
    return new Tafel(tafel.kenmerk, tafel.personen);
  }

  getAllTafels(): Observable<Tafel[]> {
    return this.http.get<ITafelsResponse>(this.api)
      .pipe(
        map(TafelsService.tafelsResponseToTafelMapper)
      );
  }

  addNewTafel(tafel: Tafel): void {
    this.http.post(this.api, tafel)
    .pipe(
      take(1)
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
