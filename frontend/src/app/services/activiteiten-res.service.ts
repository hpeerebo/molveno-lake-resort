import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ActiviteitReservering } from "../models/activiteit-reservering";
import { map } from "rxjs/operators";
import { CreateActiviteitReservering } from '../models/create-activiteit-reservering';
import { IActiviteitPlanning } from './activiteiten-planning.service';

@Injectable({
  providedIn: "root"
})
export class ActiviteitenResService {
  public readonly api: string =
    "http://localhost:4200/api/activiteiten/reserveringen/";

  constructor(private http: HttpClient) {}

  private static activiteitResToActiviteitResMapper(
    reservering: IActiviteitReservering[]
  ): ActiviteitReservering[] {
    return reservering;
  }

  private static activiteitResToActiviteitMapper(
    reservering: IActiviteitReservering
  ): ActiviteitReservering {
    return new ActiviteitReservering(
      reservering.emailGast,
      reservering.phoneGast,
      reservering.aantalPersonen,
      reservering.planning
    );
  }

  getAllActiviteitenRes(): Observable<ActiviteitReservering[]> {
    return this.http
      .get<IActiviteitReservering[]>(this.api)
      .pipe(map(ActiviteitenResService.activiteitResToActiviteitResMapper));
  }

  saveActiviteitRes(reservering: CreateActiviteitReservering, planningId: number) {
    console.log("saveActiviteitRes", reservering);
    this.http
      .post<IActiviteitReservering[]>(
        this.api + planningId,
        reservering
      )
      .subscribe();
    location.reload();
  }

  deleteActiviteitRes(reserveringId: number) {
    this.http
      .delete<IActiviteitReservering[]>(this.api + reserveringId)
      .subscribe();
    location.reload();
  }
}
interface IActiviteitReservering {
  resid: number;
  emailGast: string;
  phoneGast: string;
  aantalPersonen: number;
  planning: IActiviteitPlanning;
}
