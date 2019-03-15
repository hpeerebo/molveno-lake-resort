import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActiviteitPlanningEntity } from 'src/entities/activiteit-planning-entity';
import { Repository } from 'typeorm';
import { CreateActiviteitPlanningDto } from 'src/dto/create-activiteit-planning-dto';

@Injectable()
export class ActiviteitPlanningService {
  constructor(
    @InjectRepository(ActiviteitPlanningEntity)
    private readonly activiteitenPlanningRepository: Repository<
      ActiviteitPlanningEntity
    >,
  ) {}
  async getActiviteitenPlanning(): Promise<ActiviteitPlanningEntity[]> {
    return this.activiteitenPlanningRepository.find();
  }

  public saveActiviteitPlanning(
    activiteitplanning: ActiviteitPlanningEntity,
  ): void {
    this.activiteitenPlanningRepository.save([activiteitplanning]);
  }

  public updateActiviteitPlanning(planning: CreateActiviteitPlanningDto): void {
    this.activiteitenPlanningRepository.update(
      { planid: planning.planid },
      {
        actid: planning.actid,
        actdate: planning.actdate,
        actprijs: planning.actprijs,
        actcapaciteit: planning.actcapaciteit,
      },
    );
  }

  public deleteActiviteitenPlanning(planningId: number) {
    this.activiteitenPlanningRepository.delete({ planid: planningId });
  }
}
