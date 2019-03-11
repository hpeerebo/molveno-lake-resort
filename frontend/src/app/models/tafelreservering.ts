export class Tafelreservering {
  constructor(
    public aanvangstijd: string,
    public personen: number,
    public naam: string,
    public telefoon: string,
    public id?: number,
  ) { }
}
