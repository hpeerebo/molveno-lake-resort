import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('activiteiten')
export class ActiviteitEntity {
  @PrimaryGeneratedColumn() public readonly actid: number;
  @Column('varchar') public readonly naam: string;
  @Column('varchar') public readonly beschrijving: string;
  @Column('varchar') public readonly thumb: string;

  constructor(
    naam: string,
    beschrijving: string,
    thumb: string,
    actid?: number,
  ) {
    this.naam = naam;
    this.beschrijving = beschrijving;
    this.thumb = thumb;
    this.actid = actid
  }
}
