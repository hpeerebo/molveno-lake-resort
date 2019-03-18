import { Eenheid } from 'src/enums/eenheid';

export class Ingredient {
    constructor(
        public readonly id: number,
        public readonly naam: string,
        public readonly eenheid: Eenheid,
        public readonly prijs: number,
    ) { }
}
