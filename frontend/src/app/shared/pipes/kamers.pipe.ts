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
@Pipe({
  name: "sortgrid"
})

@Injectable()
export class SortgridPipe implements PipeTransform {
  transform(array: any, field: string): any {
    if (!Array.isArray(array)) {
      return;
    }
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
