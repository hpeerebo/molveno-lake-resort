import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GastKamerReservering } from '../../shared/models/gast-kamerreservering';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GastKamerReserveringenService {

  constructor(private http: HttpClient) {}

  saveKamerReservering(gastkamerreservering: GastKamerReservering){
    console.log(gastkamerreservering);
    this.http.post('/api/kamerreservering', gastkamerreservering)
      .pipe(
        take(1)
      ).subscribe()
  }

}