import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  ManyToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { ActiviteitPlanningEntity } from './activiteit-planning-entity';

@Entity('activiteitenreserveringen')
export class ActiviteitResEntity {
  @PrimaryGeneratedColumn() public readonly resid: number;
  @Column('varchar') public readonly emailGast: string;
  @Column('varchar') public readonly phoneGast: string;
  @Column('integer') public readonly aantalPersonen: number;

  @ManyToOne(type => ActiviteitPlanningEntity, { cascade: true })
  @JoinColumn()
  planning: ActiviteitPlanningEntity;

  constructor(
    emailGast: string,
    phoneGast: string,
    aantalPersonen: number,
  ) {
    this.emailGast = emailGast;
    this.phoneGast = phoneGast;
    this.aantalPersonen = aantalPersonen;
  }
}
