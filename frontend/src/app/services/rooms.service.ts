import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { tap } from "rxjs/operators";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpHandler
} from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { Type } from "@angular/compiler";
import { Kamer } from "../managementportal/components/kamers/kamer";

@Injectable({
  providedIn: "root"
})
export class RoomService {
  constructor(private http: HttpClient) {}

  getRoom(): Observable<Kamer[]> {
    const headers = new HttpHeaders({});
   // return this.http.get<KamerResponse>("http://www.mocky.io/v2/5c65473a3300005c11b99c33", {headers: headers})
   return this.http.get<KamerDetails>("/api/kamers", {headers: headers})
    .pipe(
     map((data: any) => data.map((kamer: Kamer) =>new Kamer(kamer.kamerNummer, kamer.kamerType, kamer.kamerLigging, kamer.aantalPersonen, kamer.prijs, kamer.status))),
     // map(RoomService.IOMDBResponseKamerToKamerMapper),
     )
  }
  saveRoom(room: Kamer){
    this.http.post("/api/kamers", room).subscribe();
  }
}
/*
  private static IOMDBResponseKamerToKamerMapper(kamerresponse: KamerResponse): Kamer[] {
    return kamerresponse.response.map(RoomService.KamerDetailsToKamer)
    // return omdbSearchResponse.Search.map(omdbFilm => new Film(omdbFilm.Poster, omdbFilm.Title, omdbFilm.Type, omdbFilm.Year, omdbFilm.imdbID))
  }
  private  static KamerDetailsToKamer(kamerdetails: KamerDetails) {
    return new Kamer(kamerdetails.kamerNummer, kamerdetails.kamerType, kamerdetails.kamerLigging, kamerdetails.aantalPersonen, kamerdetails.prijs, kamerdetails.status)
  }


export interface KamerResponse{
  response: KamerDetails[];
}
*/
export interface KamerDetails {
  kamerNummer: number;
  kamerType: string;
  kamerLigging: string;
  aantalPersonen: number;
  prijs: number;
  status: string;
}

/*
Behaviorsubject kan 1 keer gevuld worden vanuit HTTP en daarna zelf vullen met next.
const cache = new BehaviorSubject<Kamer[] | undefined>(undefined);

cache.next([new Kamer()])


cache.subscribe();
cache.subscribe();
cache.subscribe();
cache.subscribe();
*/
