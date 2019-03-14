import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActiviteitPlanningEntity } from 'src/entities/activiteit-planning-entity';
import { Repository } from 'typeorm';

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
}
