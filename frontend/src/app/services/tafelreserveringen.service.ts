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

  private readonly dataStore = new BehaviorSubject<Tafelreservering[]>([]);
  public readonly data$ = this.dataStore.asObservable();

  constructor(private http: HttpClient) {
    this.getAllReserveringen();
  }

  private static reserveringenResponseToReserveringMapper(reserveringenResponse: IReserveringenResponse): Tafelreservering[] {
    return reserveringenResponse.reserveringen.map(TafelreserveringenService.reserveringenToReserveringMapper);
  }

  private static reserveringenToReserveringMapper(reservering: IReservering): Tafelreservering {
    return new Tafelreservering(reservering.aanvangstijd, reservering.personen, reservering.naam, reservering.telefoon, reservering.id);
  }

  getAllReserveringen(): void {
    this.http
      .get<IReserveringenResponse>(this.api)
      .pipe(
        take(1),
        map(TafelreserveringenService.reserveringenResponseToReserveringMapper),
        tap(reserveringen => this.dataStore.next(reserveringen))
      )
      .subscribe();
  }

  addNewReservering(reservering: Tafelreservering): void {
    this.http
      .post(this.api, reservering)
      .pipe(
        take(1),
        tap(() => this.getAllReserveringen())
      )
      .subscribe();
  }

  deleteReservering(reservering: Tafelreservering): void {
    this.http
      .delete(`${this.api}/${reservering.id}`)
      .pipe(
        take(1),
        tap(() => this.getAllReserveringen())
      )
      .subscribe();
  }
}

interface IReserveringenResponse {
  reserveringen: IReservering[];
}

interface IReservering {
  id: number;
  aanvangstijd: string;
  personen: number;
  naam: string;
  telefoon: string;
}
