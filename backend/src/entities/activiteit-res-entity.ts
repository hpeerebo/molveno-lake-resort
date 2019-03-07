import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity('activiteit-reserveringen')
export class ActiviteitResEntity {
  @PrimaryGeneratedColumn() public readonly id: number;
  @Column('varchar') public readonly naamActiviteit: string;
  @Column('integer') public readonly datum: number;
  @Column('varchar') public readonly emailGast: string;
  @Column('integer') public readonly aantalPersonen: number;

  constructor(
    naamActiviteit: string,
    datum: number,
    emailGast: string,
    aantalPersonen: number,
  ) {
    this.naamActiviteit = naamActiviteit;
    this.datum = datum;
    this.emailGast = emailGast;
    this.aantalPersonen = aantalPersonen;
  }
}
