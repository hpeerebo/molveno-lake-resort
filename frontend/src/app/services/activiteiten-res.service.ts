import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservering } from '../models/activiteit-res';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActiviteitenResService {
  public readonly api: string =
    "http://localhost:4200/api/activiteiten-res/";

  constructor(private http: HttpClient) {}

  private static activiteitenResponseToActiviteitMapper( activiteitenResponse: IActiviteitres[] ): Reservering[] {
    console.log (activiteitenResponse);
    return activiteitenResponse.map( ActiviteitenResService.activiteitToActiviteitMapper );
  }

  private static activiteitToActiviteitMapper(
    activiteit: IActiviteitres
  ): Reservering {
    return new Reservering(
      activiteit.naamActiviteit,
      activiteit.datum,
      activiteit.emailGast,
      activiteit.aantalPersonen,
    );
  }

  getAllActiviteiten(): Observable<Reservering[]> {
    return this.http
      .get<IActiviteitres[]>(this.api)
      .pipe(map(ActiviteitenResService.activiteitenResponseToActiviteitMapper));
        }

}

interface IActiviteitres {
   naamActiviteit: string,
   datum: number,
   emailGast: string,
   aantalPersonen: number,
}
