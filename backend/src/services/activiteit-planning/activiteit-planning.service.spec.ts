import { Test, TestingModule } from '@nestjs/testing';
import { ActiviteitPlanningService } from './activiteit-planning.service';

describe('ActiviteitPlanningService', () => {
  let service: ActiviteitPlanningService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActiviteitPlanningService],
    }).compile();

    service = module.get<ActiviteitPlanningService>(ActiviteitPlanningService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
