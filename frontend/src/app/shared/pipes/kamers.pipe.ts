import { Pipe, PipeTransform, Injectable } from '@angular/core';
//import { Kamer } from 'src/app/services/rooms.service';
import { Kamer } from 'src/app/models/kamer';

@Pipe({
  name: 'kamersfilter'
})
export class KamersPipe implements PipeTransform {

  transform(value: Kamer[], args: string): Kamer[] {
    /*
     if(args==="reserved"){
       return [...value].filter(item => item.status==="reserved");
     }
     else if(args==="booked"){
      return [...value].filter(item => item.status==="booked");
    }
    else if(args==="free"){
      return [...value].filter(item => item.status==="free");
    }
    */
    if(args==="all"){
      return value;
    }
    else return value;

  }



}
