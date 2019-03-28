import { ActiviteitenPlanning } from './activiteit-planning';

export class ActiviteitReservering {
  constructor(
    public emailGast: string,
    public phoneGast: string,
    public aantalPersonen: number,
    public planning: ActiviteitenPlanning,
    public resid: number
  ) {}
}
