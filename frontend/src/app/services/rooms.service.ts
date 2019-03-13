import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpHandler
} from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { Type } from "@angular/compiler";
import { Kamer } from "../models/kamer";

@Injectable({
  providedIn: "root"
})
export class RoomService {
  private static api = `/api/kamers`;
  constructor(private http: HttpClient) {}

  getRoom(): Observable<Kamer[]> {
    const headers = new HttpHeaders({});
   return this.http.get<KamerDetails>(`${RoomService.api}`, {headers: headers})
    .pipe(
     map((data: any) => data.map((kamer: Kamer) =>new Kamer(kamer.kamerNaam, kamer.kamerType, kamer.kamerLigging, kamer.aantalPersonen, kamer.prijs))),
     // map(RoomService.IOMDBResponseKamerToKamerMapper),
     )
  }
  saveRoom(room: Kamer){
    this.http.post(`${RoomService.api}`, room).subscribe();
    location.reload();
  }
  updateRoom(room: Kamer){
    this.http.put("/api/kamers/kamernaam", room).subscribe();
    location.reload();
  }
  deleteRoom(room: Kamer){
    //this.http.delete("/api/kamers/", {params:{kamernaam: room.kamerNaam}}).subscribe();
    this.http.delete(`${RoomService.api}/${room.kamerNaam}`).subscribe();
    location.reload();
  }
}
export interface KamerDetails {
  kamerNaam: string;
  kamerType: string;
  kamerLigging: string;
  aantalPersonen: number;
  prijs: number;
}

