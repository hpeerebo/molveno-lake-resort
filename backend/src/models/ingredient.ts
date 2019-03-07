import { Eenheid } from 'src/enums/eenheid';

export class Ingredient {
    constructor(
        public naam: string,
        public eenheid: Eenheid,
        public prijs: number,
    ) { }
}
