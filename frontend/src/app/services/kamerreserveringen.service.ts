import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {KamerReservering} from '../models/kamerreservering';
import {map, take, tap} from 'rxjs/operators';
import {DateFunctions} from "../shared/services/date-functions";

@Injectable({
  providedIn: 'root'
})
export class KamerreserveringenService {
  private kamerReseveringCacheSubject = new BehaviorSubject<KamerReservering[] | undefined>(undefined);
  private kamerReseveringDetailsCacheSubject = new BehaviorSubject<KamerReservering[] | undefined>(undefined);
  private readonly dataStore = new BehaviorSubject<KamerReservering[]>([]);

  private static api = `/api/kamerreservering`;

  constructor(private http: HttpClient, private datefunctions: DateFunctions) {
  }

  getKamerReserveringen(refreshCache: boolean = false): Observable<KamerReservering[] | undefined> {
    if (this.kamerReseveringCacheSubject.getValue() === undefined || refreshCache) {
      this.http.get<IKamerReserveringenResponse>(`${KamerreserveringenService.api}`)
        .pipe(
          map(KamerreserveringenService.kamerResponseToReserveringMapper),
          take(1),
          tap(kamerreserveringen => {
            this.kamerReseveringCacheSubject.next(kamerreserveringen);
          })
        ).subscribe();
    }
    return this.kamerReseveringCacheSubject;
  }

  getKamerReseveringById(refreshCache: boolean = false, reserveringsnummer: string): Observable<KamerReservering[] | undefined> {
    if (this.kamerReseveringDetailsCacheSubject.getValue() === undefined || refreshCache) {
      this.http.get<IKamerReserveringenResponse>(`${KamerreserveringenService.api}/id/${reserveringsnummer}`)
        .pipe(
          map(KamerreserveringenService.kamerResponseToReserveringMapper),
          take(1),
          tap(kamerreserveringen => {
            this.kamerReseveringDetailsCacheSubject.next(kamerreserveringen);
          })
        ).subscribe();
    }
    return this.kamerReseveringDetailsCacheSubject;
  }

  getKamerToekomstReserveringen(refreshCache: boolean = false): Observable<KamerReservering[] | undefined> {
    if (this.kamerReseveringCacheSubject.getValue() === undefined || refreshCache) {
      this.http.get<IKamerReserveringenResponse>(`${KamerreserveringenService.api}/actief/${this.datefunctions.getCurrentDate()}`)
        .pipe(
          map(KamerreserveringenService.kamerResponseToReserveringMapper),
          take(1),
          tap(kamerreserveringen => {
            this.kamerReseveringCacheSubject.next(kamerreserveringen);
          })
        ).subscribe();
    }
    return this.kamerReseveringCacheSubject;
  }

  getKamerVerledenReserveringen(refreshCache: boolean = false): Observable<KamerReservering[] | undefined> {
    if (this.kamerReseveringCacheSubject.getValue() === undefined || refreshCache) {
      this.http.get<IKamerReserveringenResponse>(`${KamerreserveringenService.api}/inactief/${this.datefunctions.getCurrentDate()}`)
        .pipe(
          map(KamerreserveringenService.kamerResponseToReserveringMapper),
          take(1),
          tap(kamerreserveringen => {
            this.kamerReseveringCacheSubject.next(kamerreserveringen);
          })
        ).subscribe();
    }
    return this.kamerReseveringCacheSubject;
  }

  saveKamerReservering(kamerreservering: KamerReservering) {

    this.http.post(`${KamerreserveringenService.api}`, kamerreservering)
      .pipe(
        take(1),
        tap(() => this.getKamerReserveringen(true))
      ).subscribe();
  }

  updateReservering(kamerreservering: KamerReservering) {
    console.log('save is accessed');
    this.http.put(`${KamerreserveringenService.api}/kamerresevering`, kamerreservering)
      .pipe(
        take(1),
        tap(() => this.getKamerReserveringen(true))
      ).subscribe();
  }

  deleteKamerReservering(kamerdata: KamerReservering) {
    this.http.delete(`${KamerreserveringenService.api}/${kamerdata.id}`)
      .pipe(
        take(1),
        tap(() => this.getKamerReserveringen(true))
      ).subscribe();
  }


  private static kamerResponseToReserveringMapper(kamerreserveringenResponse: IKamerReserveringenResponse): KamerReservering[] {
    return kamerreserveringenResponse.kamerreserveringen.map(KamerreserveringenService.kamerToReserveringMapper);
  }

  private static kamerToReserveringMapper(kamerreservering: IKamerReservering): KamerReservering {
    return new KamerReservering(
      kamerreservering.id,
      kamerreservering.voornaam,
      kamerreservering.achternaam,
      kamerreservering.telefoonnummer,
      kamerreservering.emailadres,
      kamerreservering.identiteitsid,
      kamerreservering.postcode,
      kamerreservering.straat,
      kamerreservering.huisnummer,
      kamerreservering.woonplaats,
      kamerreservering.land,
      kamerreservering.datumvan,
      kamerreservering.datumtot,
      kamerreservering.kamernaam,
      kamerreservering.inchecken,
      kamerreservering.uitchecken,
      kamerreservering.personen,
      kamerreservering.prijs,
      kamerreservering.reserveringsnummer,
      kamerreservering.korting);
  }

}
interface IKamerReserveringenResponse {
  kamerreserveringen: IKamerReservering[];
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
  kamernaam: string,
  inchecken: string,
  uitchecken: string,
  personen: number,
  prijs: number,
  reserveringsnummer: string,
  korting: number,
}
