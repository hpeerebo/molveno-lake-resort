
  export class Kamer{
    constructor(
    public kamerNaam: string,
    public kamerType: string,
    public kamerLigging: string,
    public aantalPersonen: number,
    public prijs: number){}
//    public status: string){}

  mapToKamers(): Kamer {
    return new Kamer(this.kamerNaam, this.kamerType, this.kamerLigging, this.aantalPersonen , this.prijs);
  }
}

