export class Reservering {
  constructor(
    public naamActiviteit: string,
    public datum: number,
    public emailGast: string,
    public aantalPersonen: number,
  ) {}
}
