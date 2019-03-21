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
  @Column('varchar') public readonly actdate: string;
  @Column('integer') public readonly actprijs: number;
  @Column('integer') public readonly actcapaciteit: number;

  @ManyToOne(type => ActiviteitEntity, { cascade: true })
  @JoinColumn()
  activiteit: ActiviteitEntity;

  constructor(
    planid: number,
    actdate: string,
    actprijs: number,
    actcapaciteit: number,
  ) {
    this.planid = planid;
    this.actdate = actdate;
    this.actprijs = actprijs;
    this.actcapaciteit = actcapaciteit;
  }
}
