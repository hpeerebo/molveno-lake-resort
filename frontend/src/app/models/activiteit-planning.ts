import {Activiteit} from './activiteit';

export class ActiviteitenPlanning {
  constructor(
    public planid: number,
    public actCapaciteit: number,
    public actDate: string,
    public actPrijs: number,
    public activiteit: Activiteit
  ) {}
}
