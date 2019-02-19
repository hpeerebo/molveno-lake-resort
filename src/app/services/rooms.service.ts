import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Type } from '@angular/compiler';
import { KamerResponse, Kamer } from '../backend/components/kamers/kamer';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  //public resStub :KamerResponse[] = [];
  private roomsSubject = new BehaviorSubject<Kamer[] | undefined>(undefined);
  constructor(private http: HttpClient) { }

  getRoom(): Observable<Kamer[] | undefined> {
    const headers = new HttpHeaders({
    });
    this.http.get<Kamer[]>('http://www.mocky.io/v2/5c65473a3300005c11b99c33', { headers: headers })
      .pipe(
        //map((res: any) => res.response)
        map((res: any) => res.response.map((kamer: Kamer) => new Kamer(kamer.kamerNummer, kamer.kamerType, kamer.kamerLigging, kamer.aantalPersonen, kamer.prijs, kamer.status))),
        tap(rooms => this.roomsSubject.next(rooms))
        //gerechten: Gerecht[] = this.backendData.map(data => new Gerecht(data.naam, data.type, data.prijs));
      ).subscribe()
      return this.roomsSubject;
  }
  addRoom(room: Kamer) {
    this.roomsSubject.pipe(
      map(rooms => rooms && [...rooms,room]), 
      tap(rooms => this.roomsSubject.next(rooms))
    )
  }
}
