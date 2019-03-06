import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tafel } from '../models/tafel';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TafelsService {
  //public readonly api: string = 'http://www.mocky.io/v2/5c6fba953800002c003fc942';
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
}

interface ITafelsResponse {
  tafels: ITafel[];
}

interface ITafel {
  kenmerk: string;
  personen: number;
}
