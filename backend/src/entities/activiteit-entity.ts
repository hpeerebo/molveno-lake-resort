import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('activiteiten')
export class ActiviteitEntity {
  @PrimaryGeneratedColumn() public readonly actid: number;
  @Column('varchar') public readonly naam: string;
  @Column('varchar') public readonly beschrijving: string;
  @Column('varchar') public readonly thumb: string;

  constructor(
    actid: number,
    naam: string,
    beschrijving: string,
    thumb: string,
  ) {
    this.actid = actid;
    this.naam = naam;
    this.beschrijving = beschrijving;
    this.thumb = thumb;
  }
}
