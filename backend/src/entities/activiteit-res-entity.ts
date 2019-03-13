import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity('activiteit-reserveringen')
export class ActiviteitResEntity {
  @PrimaryGeneratedColumn() public readonly id: number;
  @Column('varchar') public readonly naamActiviteit: string;
  @Column('varchar') public readonly datum: string;
  @Column('varchar') public readonly emailGast: string;
  @Column('integer') public readonly aantalPersonen: number;

  constructor(
    id: number,
    naamActiviteit: string,
    datum: string,
    emailGast: string,
    aantalPersonen: number,
  ) {
    this.id = id;
    this.naamActiviteit = naamActiviteit;
    this.datum = datum;
    this.emailGast = emailGast;
    this.aantalPersonen = aantalPersonen;
  }
}
