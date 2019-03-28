import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Activiteit } from "../models/activiteit";
import { HttpClient } from "@angular/common/http";
import { map, take, tap } from "rxjs/operators";
import { CreateActiviteit } from '../models/create-activiteit';

@Injectable({
  providedIn: "root"
})
export class ActiviteitenService {
  public readonly api: string = `/api/activiteiten/`;
  private readonly datastore = new BehaviorSubject<Activiteit[]>([]);
  public readonly data$: Observable<Activiteit[]> = this.datastore.asObservable();

  constructor(private http: HttpClient) {
    console.log("constructor")
    this.getAllActiviteiten();
  }

  getAllActiviteiten(): void {
    console.log("getAllActiviteiten")
      this.http
      .get<IActiviteit[]>(this.api)
      .pipe(
        take(1),
        
        map(ActiviteitenService.activiteitenResponseToActiviteitMapper),
        tap(activiteiten => this.datastore.next(activiteiten))
        )
        .subscribe();
  }

  saveActiviteit(activiteit: CreateActiviteit): void {
    this.http.post<IActiviteit[]>(this.api, activiteit).subscribe();
    console.log("saveActiviteit", activiteit);
    location.reload();
  }

  updateActiviteit(activiteit: Activiteit): void {
    this.http.post<IActiviteit[]>(this.api, activiteit).subscribe();
    console.log("updateActiviteit", activiteit);
    location.reload();
  }

  deleteActiviteit(activiteitId: number): void {
    this.http.delete<IActiviteit[]>(this.api + activiteitId).subscribe();
    console.log("deleteActiviteit", activiteitId);
    location.reload();
  }

  private static activiteitenResponseToActiviteitMapper(
    activiteitenResponse: IActiviteit[]
  ): Activiteit[] {
    return activiteitenResponse.map(
      ActiviteitenService.activiteitToActiviteitMapper
    );
  }

  private static activiteitToActiviteitMapper(
    activiteit: IActiviteit
  ): Activiteit {
    return new Activiteit(
      activiteit.actid,
      activiteit.naam,
      activiteit.beschrijving,
      activiteit.thumb
    );
  }
}

export interface IActiviteit {
  actid: number;
  naam: string;
  beschrijving: string;
  thumb: string;
}
