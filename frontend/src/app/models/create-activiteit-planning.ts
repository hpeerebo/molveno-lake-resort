import {Activiteit} from './activiteit';

export class CreateActiviteitenPlanning {
  constructor(
    public actCapaciteit: number,
    public actDate: string,
    public actPrijs: number,
    public activiteit: Activiteit

  ) {}
}
