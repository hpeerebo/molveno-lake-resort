import { Pipe, PipeTransform } from '@angular/core';
import { ActiviteitenPlanning } from 'src/app/models/activiteit-planning';

@Pipe({
  name: 'activiteitPlanningFilter'
})
export class ActiviteitPlanningPipe implements PipeTransform {

  transform(value: ActiviteitenPlanning[], args: string): ActiviteitenPlanning[] {

    if(args==="all"){
      return value;
    }
    else return value;

  }



}
