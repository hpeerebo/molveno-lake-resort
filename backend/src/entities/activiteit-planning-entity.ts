import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ActiviteitEntity } from './activiteit-entity';

@Entity('activiteitenplanning')
export class ActiviteitPlanningEntity {
  @PrimaryGeneratedColumn() public readonly planid: number;
  @Column('varchar') public readonly actdate: string;
  @Column('integer') public readonly actprijs: number;
  @Column('integer') public readonly actcapaciteit: number;

  @OneToOne(type => ActiviteitEntity, { cascade: true })
  @JoinColumn()
  activiteit: ActiviteitEntity;

  constructor(
    planid: number,
    // actid: number,
    actdate: string,
    actprijs: number,
    actcapaciteit: number,
  ) {
    this.planid = planid;
    // this.actid = actid;
    this.actdate = actdate;
    this.actprijs = actprijs;
    this.actcapaciteit = actcapaciteit;
  }
}
