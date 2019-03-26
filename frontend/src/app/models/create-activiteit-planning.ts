import {Activiteit} from './activiteit';

export class CreateActiviteitenPlanning {
  constructor(
    public actdate: string,
    public actprijs: number,
    public actcapaciteit: number,
    public activiteit: Activiteit
  ) {}
}
