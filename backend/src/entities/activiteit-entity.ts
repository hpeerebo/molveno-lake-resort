import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class ActiviteitEntity {
  @PrimaryGeneratedColumn() public readonly id: number;
  @Column('varchar') public readonly naam: string;
  @Column('varchar') public readonly beschrijving: string;
  @Column('integer') public readonly capaciteit: number;
  @Column('Date') public readonly datum: Date;
  @Column('integer') public readonly prijs: number;
  @Column('varchar') public readonly thumb: string;

  constructor(
    id: number,
    naam: string,
    beschrijving: string,
    capaciteit: number,
    datum: Date,
    prijs: number,
    thumb: string,
  ) {
    this.id = id;
    this.naam = naam;
    this.beschrijving = beschrijving;
    this.capaciteit = capaciteit;
    this.datum = datum;
    this.prijs = prijs;
    this.thumb = thumb;
  }
}
