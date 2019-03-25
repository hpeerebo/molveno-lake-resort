import {Activiteit} from './activiteit';

export class ActiviteitenPlanning {
  constructor(
    public planid: number,
    // public actid: number,
    public actdate: string,
    public actprijs: number,
    public actcapaciteit: number,
    public activiteit: Activiteit
  ) {}
}
