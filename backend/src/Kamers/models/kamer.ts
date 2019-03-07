import {KamerEntity} from "./entities/kamer.entity";

export class Kamer{
    constructor(
        public id: number,
        public kamerNaam: string,
        public kamerType: string,
        public kamerLigging: string,
        public aantalPersonen: number,
        public prijs: number
    ){}

    public static fromKamerEntity(kamerEntity: KamerEntity): Kamer {
        return new Kamer(kamerEntity.id,
            kamerEntity.kamerNaam,
            kamerEntity.kamerType,
            kamerEntity.kamerLigging,
            kamerEntity.aantalPersonen,
            kamerEntity.prijs);
    }
}
