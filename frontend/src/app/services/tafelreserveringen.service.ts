import { Injectable } from '@angular/core';
import { Tafelreservering } from '../models/tafelreservering';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TafelreserveringenService {
  public readonly api: string = '/api/restaurant/reserveringen';

  public readonly reserveringCache = new BehaviorSubject<Tafelreservering[] | undefined>(undefined);

  constructor(private http: HttpClient) { }

  private static reserveringenResponseToReserveringMapper(reserveringenResponse: IReserveringenResponse): Tafelreservering[] {
    return reserveringenResponse.reserveringen.map(TafelreserveringenService.reserveringenToReserveringMapper);
  }

  private static reserveringenToReserveringMapper(reservering: IReservering): Tafelreservering {
    return new Tafelreservering(reservering.aanvangstijd, reservering.personen, reservering.naam, reservering.telefoon);
  }

  getAllReserveringen(refreshCache: boolean = false): Observable<Tafelreservering[] | undefined> {
    if (this.reserveringCache.getValue() === undefined || refreshCache) {
      this.http.get<IReserveringenResponse>(this.api)
        .pipe(
          take(1),
          map(TafelreserveringenService.reserveringenResponseToReserveringMapper),
          tap(reserveringen => this.reserveringCache.next(reserveringen))
        ).subscribe()
    }
    return this.reserveringCache;
  }

  addNewReservering(reservering: Tafelreservering): void {
    this.http.post(this.api, reservering)
      .pipe(
        take(1),
        tap(() => this.getAllReserveringen(true))
      ).subscribe()
  }
}

interface IReserveringenResponse {
  reserveringen: IReservering[];
}

interface IReservering {
  aanvangstijd: string;
  personen: number;
  naam: string;
  telefoon: string;
}
