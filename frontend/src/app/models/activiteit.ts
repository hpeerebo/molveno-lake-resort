export class Activiteit {
  constructor(
    public id: number,
    public naam: string,
    public beschrijving: string,
    public datum: Date,
    public capaciteit: number,
    public prijs: number,
    public thumb: string
  ) {}
}
