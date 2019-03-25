export class GastKamerReservering{
  constructor(
    public id: number,
    public voornaam: string,
    public achternaam: string,
    public telefoonnummer: string,
    public emailadres: string,
    public identiteitsid: string,
    public aantalpersonen: string,
    public postcode: string,
    public straat: string,
    public huisnummer: string,
    public woonplaats: string,
    public land: string,
    public datumvan: string,
    public datumtot: string,
    public kamernaam: string,
    public inchecken: string,
    public uitchecken: string,
    public personen: number,
    public prijs: number,
    public reserveringsnummer: string){}
  }
