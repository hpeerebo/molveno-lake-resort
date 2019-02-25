import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gerecht } from '../models/gerecht';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GerechtenService {
  public readonly api: string = 'http://www.mocky.io/v2/5c6fc42a38000054003fc97c';

  constructor(private http: HttpClient) { }

  private static gerechtenResponseToGerechtMapper(gerechtenResponse: IGerechtenResponse): Gerecht[] {
    return gerechtenResponse.gerechten.map(GerechtenService.gerechtToGerechtMapper);
  }

  private static gerechtToGerechtMapper(gerecht: IGerecht): Gerecht {
    return new Gerecht(gerecht.naam, gerecht.type, gerecht.subtype, gerecht.prijs);
  }

  getAllGerechten(): Observable<Gerecht[]> {
    return this.http.get<IGerechtenResponse>(this.api)
      .pipe(
        map(GerechtenService.gerechtenResponseToGerechtMapper)
      );
  }
}

interface IGerechtenResponse {
  gerechten: IGerecht[];
}

interface IGerecht {
  naam: string;
  type: string;
  subtype: string;
  prijs: number;
}
