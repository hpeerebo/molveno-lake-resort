import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('activiteitenplanning')
export class ActiviteitPlanningEntity {
  @PrimaryGeneratedColumn() public readonly planid: number;
  @Column('integer') public readonly actid: number;
  @Column('varchar') public readonly actdate: string;
  @Column('integer') public readonly actprijs: number;
  @Column('integer') public readonly actcapaciteit: number;

  constructor(
    planid: number,
    actid: number,
    actdate: string,
    actprijs: number,
    actcapaciteit: number,
  ) {
    this.planid = planid;
    this.actid = actid;
    this.actdate = actdate;
    this.actprijs = actprijs;
    this.actcapaciteit = actcapaciteit;
  }
}
