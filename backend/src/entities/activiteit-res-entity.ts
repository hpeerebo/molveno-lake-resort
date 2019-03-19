import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity('activiteitenreserveringen')
export class ActiviteitResEntity {
  @PrimaryGeneratedColumn() public readonly resid: number;
  @Column('integer') public readonly planid: number;
  @Column('varchar') public readonly emailGast: string;
  @Column('integer') public readonly aantalPersonen: number;

  constructor(
    resid: number,
    planid: number,
    emailGast: string,
    aantalPersonen: number,
  ) {
    this.resid = resid;
    this.planid = planid;
    this.emailGast = emailGast;
    this.aantalPersonen = aantalPersonen;
  }
}
