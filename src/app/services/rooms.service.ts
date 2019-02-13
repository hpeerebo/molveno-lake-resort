import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) { }

  getTables():Observable <KamerResponse[]> {
    const headers = new HttpHeaders({
    });
    return this.http.get<KamerResponse[]>('http://www.mocky.io/v2/5c640a6f320000f01993f786', {headers:headers})
      .pipe(
        map((res: any) => res.response)
        //tap(console.log)
      )
  }
}
export interface KamerResponse{
  kamerNummer:number;
  kamerType: string;
  grootte: number;
  persons: number;
  prijs: number;
}
