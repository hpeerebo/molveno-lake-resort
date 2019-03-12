import { Injectable } from "@angular/core";
import { map, take } from "rxjs/operators";
import { tap } from "rxjs/operators";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpHandler
} from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { Type } from "@angular/compiler";
import { Kamer } from "../models/kamer";
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: "root"
})
export class RoomService {
  private kamersCacheSubject = new BehaviorSubject<Kamer[] | undefined>(undefined);
  private static api = `/api/kamers`;
  constructor(private http: HttpClient) {}

  /* getRoom(): Observable<Kamer[]> {
    const headers = new HttpHeaders({});
   return this.http.get<KamerDetails>(`${RoomService.api}`, {headers: headers})
    .pipe(
     map((data: any) => data.map((kamer: Kamer) =>new Kamer(kamer.kamerNaam, kamer.kamerType, kamer.kamerLigging, kamer.aantalPersonen, kamer.prijs))),
     // map(RoomService.IOMDBResponseKamerToKamerMapper),
     )
  } */
  getRoom(refreshCache: boolean = false): Observable<Kamer[] | undefined> {
    if (this.kamersCacheSubject.getValue() === undefined || refreshCache) {
      this.http.get<KamerDetails>(`${RoomService.api}`)
        .pipe(
          map((data: any) => data.map((kamer: Kamer) =>new Kamer(kamer.kamerNaam, kamer.kamerType, kamer.kamerLigging, kamer.aantalPersonen, kamer.prijs))),
          take(1),
          tap(kamers => {
            this.kamersCacheSubject.next(kamers);
          })
        ).subscribe()
    }
    return this.kamersCacheSubject;
  }
  searchRoom(datumvan: string, datumtot: string, kamertype: string){
    this.http.get<KamerDetails>(`${RoomService.api}/search/${datumvan}/${datumtot}/${kamertype}`)
    .pipe(
      map((data: any) => data.map((kamer: Kamer) =>new Kamer(kamer.kamerNaam, kamer.kamerType, kamer.kamerLigging, kamer.aantalPersonen, kamer.prijs))),
      take(1),
      tap(kamers => {
        this.kamersCacheSubject.next(kamers);
      })
    ).subscribe();
  }
  saveRoom(room: Kamer){
    this.http.post(`${RoomService.api}`, room)
    .pipe(
      take(1),
      tap(() => this.getRoom(true))
    ).subscribe()
    //location.reload();
  }
  updateRoom(room: Kamer){
    this.http.put("/api/kamers/kamernaam", room)
    .pipe(
      take(1),
      tap(() => this.getRoom(true))
    ).subscribe()

    //location.reload();
  }
  deleteRoom(room: Kamer){
    //this.http.delete("/api/kamers/", {params:{kamernaam: room.kamerNaam}}).subscribe();
    this.http.delete(`${RoomService.api}/${room.kamerNaam}`)
    .pipe(
      take(1),
      tap(() => this.getRoom(true))
    ).subscribe();

  }
}
export interface KamerDetails {
  kamerNaam: string;
  kamerType: string;
  kamerLigging: string;
  aantalPersonen: number;
  prijs: number;
}

