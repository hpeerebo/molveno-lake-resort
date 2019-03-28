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

  saveActiviteitPlanning(planning: CreateActiviteitenPlanning, actId: number) {
    console.log("saveActiviteitPlanning", planning);
    this.http.post<IActiviteitPlanning[]>(this.api + actId, planning).subscribe();
    // location.reload();
  }

  updateActiviteitPlanning(planning: ActiviteitenPlanning): void {
    this.http.put<IActiviteitPlanning[]>(this.api, planning).subscribe();
    // location.reload();
  }

  deleteActiviteitPlanning(planid: number): void {
    this.http
      .delete<IActiviteitPlanning[]>(this.api + planid)
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
      activiteitplanning.actcapaciteit,
      activiteitplanning.actprijs,
      activiteitplanning.activiteit
    );
  }
}

export interface IActiviteitPlanning {
  planid: number;
  actcapaciteit: number;
  actdate: string;
  actprijs: number;
  activiteit: IActiviteit;
}

