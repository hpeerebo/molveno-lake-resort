import { Pipe, PipeTransform } from '@angular/core';
import { Activiteit } from 'src/app/models/activiteit';
import { ActiviteitReservering } from 'src/app/models/activiteit-reservering';

@Pipe({
  name: 'activiteitReserveringenFilter'
})
export class ActiviteitReserveringenPipe implements PipeTransform {

  transform(value: ActiviteitReservering[], args: string): ActiviteitReservering[] {

    if(args==="all"){
      return value;
    }
    else return value;

  }



}
