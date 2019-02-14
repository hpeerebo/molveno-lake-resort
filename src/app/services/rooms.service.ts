import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Type } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  //public resStub :KamerResponse[] = [];
  constructor(private http: HttpClient) { }

  getRoom():Observable <KamerResponse[]> {
    const headers = new HttpHeaders({
    });
    return this.http.get<KamerResponse[]>('http://www.mocky.io/v2/5c65473a3300005c11b99c33', {headers:headers})
      .pipe(
        //map((res: any) => res.response)
        map((res: any) => res.response.map((kamer : KamerResponse)  => new Kamer(kamer.kamerNummer, kamer.kamerType, kamer.kamerLigging, kamer.aantalPersonen, kamer.prijs, kamer.status))),
        //tap(console.log)
        //gerechten: Gerecht[] = this.backendData.map(data => new Gerecht(data.naam, data.type, data.prijs));
      )
  }
}
export interface KamerResponse{
  kamerNummer:number;
  kamerType: string;
  kamerLigging: string;
  aantalPersonen: number;
  prijs: number;
  status: string;
}
export class Kamer implements KamerResponse{
  kamerNummer:number;
  kamerType:string;
  kamerLigging:string;
  aantalPersonen:number;
  prijs:number;
  status:string;

  constructor(kamerNummer:number, kamerType:string, kamerLigging:string, aantalPersonen:number, prijs:number, status:string){
    this.kamerNummer = kamerNummer;
    this.kamerType = kamerType;
    this.kamerLigging = kamerLigging;
    this.aantalPersonen = aantalPersonen;
    this.prijs = prijs;
    this.status = status;
  }
}

