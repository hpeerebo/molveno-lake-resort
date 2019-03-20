export class Tafelreservering {
  constructor(
    public aanvangstijd: Date,
    public personen: number,
    public naam: string,
    public telefoon: string,
    public id?: number,
  ) { }
}
