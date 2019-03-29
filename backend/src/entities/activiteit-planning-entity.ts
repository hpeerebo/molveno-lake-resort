import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { ActiviteitEntity } from './activiteit-entity';

@Entity('activiteitenplanning')
export class ActiviteitPlanningEntity {
  @PrimaryGeneratedColumn() public readonly planid: number;
  @Column('integer') public readonly actCapaciteit: number;
  @Column('varchar') public readonly actDate: string;
  @Column('integer') public readonly actPrijs: number;

  @ManyToOne(type => ActiviteitEntity, { cascade: true })
  @JoinColumn()
  activiteit: ActiviteitEntity;

  constructor(
    actCapaciteit: number,
    actDate: string,
    actPrijs: number,
    planid?: number,
  ) {
    this.actCapaciteit = actCapaciteit;
    this.actDate = actDate;
    this.actPrijs = actPrijs;
    this.planid = planid;
  }
}
