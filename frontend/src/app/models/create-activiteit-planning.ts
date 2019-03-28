import {Activiteit} from './activiteit';

export class CreateActiviteitenPlanning {
  constructor(
    public actcapaciteit: number,
    public actdate: string,
    public actprijs: number,
    public activiteit: Activiteit

  ) {}
}
