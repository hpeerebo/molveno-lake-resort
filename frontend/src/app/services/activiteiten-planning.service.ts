import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActiviteitenPlanning } from "../models/activiteit-planning";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ActiviteitenPlanningService {
  public readonly api: string = `/api/activiteiten/planning/`;

  constructor(private http: HttpClient) {}

  private static activiteitenplanResponseToActiviteitplanMapper(
    activiteitenplanningResponse: IActiviteitPlanning[]
  ): ActiviteitenPlanning[] {
    console.log("activiteitenPlanningResponse");
    return activiteitenplanningResponse;
    // return activiteitenplanningResponse.map(
    //   ActiviteitenPlanningService.activiteitenplanResponseToActiviteitplanMapper
    // );
  }

  private static activiteitToActiviteitMapper(
    activiteitplanning: IActiviteitPlanning
  ): ActiviteitenPlanning {
    return new ActiviteitenPlanning(
      activiteitplanning.planid,
      // activiteitplanning.actid,
      activiteitplanning.actdate,
      activiteitplanning.actprijs,
      activiteitplanning.actcapaciteit
    );
  }

  getAllActiviteitenPlanning(): Observable<ActiviteitenPlanning[]> {
    return this.http
      .get<IActiviteitPlanning[]>(this.api)
      .pipe(
        map(
          ActiviteitenPlanningService.activiteitenplanResponseToActiviteitplanMapper
        )
      );
  }

  saveActiviteitPlanning(planning: ActiviteitenPlanning): void {
    this.http.post<IActiviteitPlanning[]>(this.api, planning).subscribe();
    // console.log(planning);
    // location.reload();
  }

  updateActiviteitPlanning(planning: ActiviteitenPlanning): void {
    this.http.post<IActiviteitPlanning[]>(this.api, planning).subscribe();
    // location.reload();
  }

  deleteActiviteitPlanning(planning: ActiviteitenPlanning): void {
    this.http
      .delete<IActiviteitPlanning[]>(this.api + planning.planid)
      .subscribe();
    // location.reload();
  }
}

interface IActiviteitPlanning {
  planid: number;
  // actid: number;
  actdate: string;
  actprijs: number;
  actcapaciteit: number;
}
