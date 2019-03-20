import { Column, PrimaryGeneratedColumn, Entity, ManyToMany, JoinColumn } from 'typeorm';
import { ActiviteitPlanningEntity } from './activiteit-planning-entity';

@Entity('activiteitenreserveringen')
export class ActiviteitResEntity {
  @PrimaryGeneratedColumn() public readonly resid: number;
  // @Column('integer') public readonly planid: number;
  @Column('varchar') public readonly emailGast: string;
  @Column('varchar') public readonly phoneGast: string;
  @Column('integer') public readonly aantalPersonen: number;

  @ManyToMany(type => ActiviteitPlanningEntity, { cascade: true })
  @JoinColumn()
  activiteit: ActiviteitPlanningEntity;

  constructor(
    resid: number,
    // planid: number,
    emailGast: string,
    phoneGast: string,
    aantalPersonen: number,
  ) {
    this.resid = resid;
    // this.planid = planid;
    this.emailGast = emailGast;
    this.phoneGast = phoneGast;
    this.aantalPersonen = aantalPersonen;
  }
}
