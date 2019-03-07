export class Tafelreservering {
    constructor(
        public readonly id: number,
        public readonly aanvangstijd: string,
        public readonly personen: number,
        public readonly naam: string,
        public readonly telefoon: string,
    ) { }
}
