import { GerechtType } from "src/enums/gerechttype";
import { GerechtSubType } from "src/enums/gerechtsubtype";
import { Ingredient } from "dist/models/ingredient";

export class GerechtDetails {
    constructor(
        public readonly id: number,
        public readonly naam: string,
        public readonly type: GerechtType,
        public readonly subtype: GerechtSubType,
        public readonly prijs: number,
        public readonly ingredienten: Ingredient[]
    ) { }
}
