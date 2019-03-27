import { Pipe, PipeTransform } from '@angular/core';
import { Activiteit } from 'src/app/models/activiteit';

@Pipe({
  name: 'activiteitFilter'
})
export class ActiviteitReserveringenPipe implements PipeTransform {

  transform(value: Activiteit[], args: string): Activiteit[] {

    if(args==="all"){
      return value;
    }
    else return value;

  }



}
