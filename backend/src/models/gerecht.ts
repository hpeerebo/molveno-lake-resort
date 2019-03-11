import { GerechtType } from 'src/enums/gerechttype';
import { GerechtSubType } from 'src/enums/gerechtsubtype';

export class Gerecht {
    constructor(
        public readonly id: number,
        public readonly naam: string,
        public readonly type: GerechtType,
        public readonly subtype: GerechtSubType,
        public readonly prijs: number,
    ) { }
}
