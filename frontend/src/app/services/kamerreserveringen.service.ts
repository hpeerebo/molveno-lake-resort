import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { KamerReservering } from '../models/kamerreservering';
import {map, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KamerreserveringenService {
  private kamerReseveringCacheSubject = new BehaviorSubject<KamerReservering[] | undefined>(undefined);
  private static api = `/api/kamerreservering`;

  constructor(private http: HttpClient) {}

  getKamerReserveringen(refreshCache: boolean = false): Observable<KamerReservering[] | undefined> {
    if (this.kamerReseveringCacheSubject.getValue() === undefined || refreshCache) {
      this.http.get<IKamerReservering>(`${KamerreserveringenService.api}`)
        .pipe(
          map((data: any) => data.map((kamerreservering: KamerReservering) =>new KamerReservering(kamerreservering.id,
            kamerreservering.voornaam, kamerreservering.achternaam, kamerreservering.telefoonnummer, kamerreservering.emailadres,
            kamerreservering.identiteitsid, kamerreservering.postcode, kamerreservering.straat, kamerreservering.huisnummer,
            kamerreservering.woonplaats, kamerreservering.land, kamerreservering.datumvan, kamerreservering.datumtot, kamerreservering.kamernaam))),
          take(1),
          tap(kamerreservering => {
            this.kamerReseveringCacheSubject.next(kamerreservering);
          })
        ).subscribe()
    }
    return this.kamerReseveringCacheSubject;
  }

  getKamerToekomstReserveringen(refreshCache: boolean = false): Observable<KamerReservering[] | undefined> {
    console.log(this.getCurrentDate());
    if (this.kamerReseveringCacheSubject.getValue() === undefined || refreshCache) {
      this.http.get<IKamerReservering>(`${KamerreserveringenService.api}/actief/${this.getCurrentDate()}`)
        .pipe(
          map((data: any) => data.map((kamerreservering: KamerReservering) =>new KamerReservering(kamerreservering.id,
            kamerreservering.voornaam, kamerreservering.achternaam, kamerreservering.telefoonnummer, kamerreservering.emailadres,
            kamerreservering.identiteitsid, kamerreservering.postcode, kamerreservering.straat, kamerreservering.huisnummer,
            kamerreservering.woonplaats, kamerreservering.land, kamerreservering.datumvan, kamerreservering.datumtot, kamerreservering.kamernaam))),
          take(1),
          tap(kamerreservering => {
            this.kamerReseveringCacheSubject.next(kamerreservering);
          })
        ).subscribe()
    }
    return this.kamerReseveringCacheSubject;
  }

  getKamerVerledenReserveringen(refreshCache: boolean = false): Observable<KamerReservering[] | undefined> {
    if (this.kamerReseveringCacheSubject.getValue() === undefined || refreshCache) {
      this.http.get<IKamerReservering>(`${KamerreserveringenService.api}/inactief/${this.getCurrentDate()}`)
        .pipe(
          map((data: any) => data.map((kamerreservering: KamerReservering) =>new KamerReservering(kamerreservering.id,
            kamerreservering.voornaam, kamerreservering.achternaam, kamerreservering.telefoonnummer, kamerreservering.emailadres,
            kamerreservering.identiteitsid, kamerreservering.postcode, kamerreservering.straat, kamerreservering.huisnummer,
            kamerreservering.woonplaats, kamerreservering.land, kamerreservering.datumvan, kamerreservering.datumtot, kamerreservering.kamernaam))),
          take(1),
          tap(kamerreservering => {
            this.kamerReseveringCacheSubject.next(kamerreservering);
          })
        ).subscribe()
    }
    return this.kamerReseveringCacheSubject;
  }
  saveKamerReservering(kamerreservering: KamerReservering){
    this.http.post(`${KamerreserveringenService.api}`, kamerreservering)
      .pipe(
        take(1),
        tap(() => this.getKamerReserveringen(true))
      ).subscribe()
  }
  deleteKamerReservering(kamerdata: KamerReservering){
    console.log(kamerdata);
    this.http.delete(`${KamerreserveringenService.api}/${kamerdata.id}`)
      .pipe(
        take(1),
        tap(() => this.getKamerReserveringen(true))
      ).subscribe();
  }

  getCurrentDate(): string{
    const currentDate:Date = new Date();
    let today: string = "";
    let dd:any = currentDate.getDate();
    let mm:any = currentDate.getMonth()+1;
    let yyyy:any = currentDate.getFullYear();

    if(dd<10) {
      dd = '0'+dd
    }

    if(mm<10) {
      mm = '0'+mm
    }
    today = (yyyy + '-' + mm + '-' + dd);
    return today;
  }

}

export interface IKamerReservering {
     id: number,
     voornaam: string,
     achternaam: string,
     telefoonnummer: string,
     emailadres: string,
     identiteitsid: string,
     postcode: string,
     straat: string,
     huisnummer: string,
     woonplaats: string,
     land: string,
     datumvan: string,
     datumtot: string,
     kamernaam: string
}
