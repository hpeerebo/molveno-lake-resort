import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActiviteitenPlanning } from "../models/activiteit-planning";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {IActiviteit} from './activiteiten.service';
import { CreateActiviteitenPlanning } from '../models/create-activiteit-planning';

@Injectable({
  providedIn: "root"
})
export class ActiviteitenPlanningService {
  public readonly api: string = `/api/activiteiten/planning/`;

  constructor(private http: HttpClient) {}

  getAllActiviteitenPlanning(): Observable<ActiviteitenPlanning[]> {
    return this.http
      .get<IActiviteitPlanning[]>(this.api)
      .pipe(
        map(
          ActiviteitenPlanningService.activiteitenplanResponseToActiviteitplanMapper
        )
      );
  }

  saveActiviteitPlanning(planning: CreateActiviteitenPlanning): void {
    this.http.post<IActiviteitPlanning[]>(this.api, planning).subscribe();
    // location.reload();
  }

  updateActiviteitPlanning(planning: ActiviteitenPlanning): void {
    this.http.post<IActiviteitPlanning[]>(this.api, planning).subscribe();
    // location.reload();
  }

  deleteActiviteitPlanning(planningId: number): void {
    this.http
      .delete<IActiviteitPlanning[]>(this.api + planningId)
      .subscribe();
    // location.reload();
  }

  private static activiteitenplanResponseToActiviteitplanMapper(
    activiteitenplanningResponse: IActiviteitPlanning[]
  ): ActiviteitenPlanning[] {
    return activiteitenplanningResponse;
  }

  private static activiteitToActiviteitMapper(
    activiteitplanning: IActiviteitPlanning
  ): ActiviteitenPlanning {
    return new ActiviteitenPlanning(
      activiteitplanning.planid,
      activiteitplanning.actdate,
      activiteitplanning.actprijs,
      activiteitplanning.actcapaciteit,
      activiteitplanning.activiteit
    );
  }
}

export interface IActiviteitPlanning {
  planid: number;
  actdate: string;
  actprijs: number;
  actcapaciteit: number;
  activiteit: IActiviteit;
}
