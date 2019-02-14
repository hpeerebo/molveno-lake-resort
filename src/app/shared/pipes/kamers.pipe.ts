import { Pipe, PipeTransform } from '@angular/core';
import { Kamer } from 'src/app/services/rooms.service';

@Pipe({
  name: 'kamersfilter'
})
 export class KamersPipe implements PipeTransform {

   transform(value: Kamer[], args: string): Kamer[] {
     if(args==="reserved"){
       return [...value].filter(item => item.status==="reserved");
     }
     else if(args==="booked"){
      return [...value].filter(item => item.status==="booked");
    }
    else if(args==="free"){
      return [...value].filter(item => item.status==="free");
    }
    else if(args==="all"){
      return value;
    }
     else return value;

   }



}
/*
export class KamersPipe<T> implements PipeTransform {

  transform(value: T[], propertyName: any): T[] {
    if (value[propertyName] === true) {
      return [...value].filter(item => item.status === "reserved");
    }
    else return value;

  }
}
*/