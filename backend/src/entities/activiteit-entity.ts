import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class ActiviteitEntity {
  @PrimaryGeneratedColumn() public readonly id: number;
  @Column('varchar') public readonly naam: string;
  @Column('varchar') public readonly beschrijving: string;
  @Column('varchar') public readonly capaciteit: number;
  @Column('integer') public readonly datum: number;
  @Column('varchar') public readonly prijs: number;
  @Column('varchar') public readonly thumb: string;

  constructor(
    naam: string,
    beschrijving: string,
    capaciteit: number,
    datum: number,
    prijs: number,
    thumb: string,
  ) {
    this.naam = naam;
    this.beschrijving = beschrijving;
    this.capaciteit = capaciteit;
    this.datum = datum;
    this.prijs = prijs;
    this.thumb = thumb;
  }
}
