export interface KamerResponse{
    kamerNummer:number;
    kamerType: string;
    kamerLigging: string;
    aantalPersonen: number;
    prijs: number;
    status: string;
  }
  export class Kamer implements KamerResponse{
    kamerNummer:number;
    kamerType:string;
    kamerLigging:string;
    aantalPersonen:number;
    prijs:number;
    status:string;
  
    constructor(kamerNummer:number, kamerType:string, kamerLigging:string, aantalPersonen:number, prijs:number, status:string){
      this.kamerNummer = kamerNummer;
      this.kamerType = kamerType;
      this.kamerLigging = kamerLigging;
      this.aantalPersonen = aantalPersonen;
      this.prijs = prijs;
      this.status = status;
    }
  }
  
  