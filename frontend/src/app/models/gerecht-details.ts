import { Ingredient } from './ingredient';

export class GerechtDetails {
  constructor(
    public id: number,
    public naam: string,
    public type: string,
    public subtype: string,
    public prijs: number,
    public ingredienten: Ingredient[]
  ) {}
}
