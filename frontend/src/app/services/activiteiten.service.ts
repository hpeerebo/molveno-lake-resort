import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Activiteit } from "../models/activiteit";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ActiviteitenService {
  public readonly api: string =
    "http://www.mocky.io/v2/5c7678443200008a22f461b2";

  constructor(private http: HttpClient) {}

  private static activiteitenResponseToActiviteitMapper( activiteitenResponse: IActiviteitenResponse ): Activiteit[] {
    console.log (activiteitenResponse);
    return activiteitenResponse.activiteiten.map( ActiviteitenService.activiteitToActiviteitMapper );
  }

  private static activiteitToActiviteitMapper(
    activiteit: IActiviteit
  ): Activiteit {
    return new Activiteit(
      activiteit.naam,
      activiteit.beschrijving,
      activiteit.datum,
      activiteit.capaciteit,
      activiteit.prijs,
      activiteit.thumb
    );
  }

  getAllActiviteiten(): Observable<Activiteit[]> {
    return this.http
      .get<IActiviteitenResponse>(this.api)
      .pipe(map(ActiviteitenService.activiteitenResponseToActiviteitMapper));
  }
}

interface IActiviteitenResponse {
  activiteiten: IActiviteit[];
}

interface IActiviteit {
  naam: string;
  beschrijving: string;
  datum: string;
  capaciteit: number;
  prijs: number;
  thumb: string;
}
