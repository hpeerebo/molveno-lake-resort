import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Activiteit } from '../models/activiteit';

@Injectable({
  providedIn: 'root'
})
export class ActiviteitenService {
  public readonly api: string = 'http://www.mocky.io/v2/5c6e98f23400003900892dd8';

  constructor(private http: HttpClient) { }

  private static activiteitenResponseToActiviteitMapper(activiteitenResponse: IActiviteitenResponse): Activiteit[] {
    return activiteitenResponse.activiteiten.map(ActiviteitenService.activiteitToActiviteitMapper);
  }

  private static activiteitToActiviteitMapper(activiteit: IActiviteit): Activiteit {
    return new Activiteit(
      activiteit.activiteitNummer,
      activiteit.activiteitNaam,
	   activiteit.activiteitDatum,
	    activiteit.aantalPersonen,
	   activiteit.prijs)
  }

  getAllActiviteiten(): Observable<Activiteit[]> {
    return this.http.get<IActiviteitenResponse>(this.api)
      .pipe(
        map(ActiviteitenService.activiteitenResponseToActiviteitMapper)
      );
  }
}

interface IActiviteitenResponse {
  activiteiten: IActiviteit[];
}

interface IActiviteit {
  activiteitNummer: number;
  activiteitNaam: string;
  activiteitDatum: string;
  aantalPersonen: number;
  prijs: number;
}
