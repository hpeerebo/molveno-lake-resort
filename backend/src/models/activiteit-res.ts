export class ActiviteitRes {
  constructor(
    public id: number,
    public naamActiviteit: string,
    public datum: string,
    public emailGast: string,
    public aantalPersonen: number,
  ) {}
}
