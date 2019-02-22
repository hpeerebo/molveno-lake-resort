import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tafel } from '../models/tafel';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TafelsService {
  public readonly api: string = 'http://www.mocky.io/v2/5c6fba953800002c003fc942';

  constructor(private http: HttpClient) { }

  private static tafelsResponseToTafelMapper(tafelsResponse: ITafelsResponse): Tafel[] {
    return tafelsResponse.tafels.map(TafelsService.tafeltoTafelMapper);
  }

  private static tafeltoTafelMapper(tafel: ITafel): Tafel {
    return new Tafel(tafel.nummer, tafel.personen);
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
  nummer: number;
  personen: number;
}
