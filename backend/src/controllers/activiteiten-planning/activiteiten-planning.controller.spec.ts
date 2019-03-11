import { Test, TestingModule } from '@nestjs/testing';
import { ActiviteitenPlanningController } from './activiteiten-planning.controller';

describe('ActiviteitenPlanning Controller', () => {
  let controller: ActiviteitenPlanningController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActiviteitenPlanningController],
    }).compile();

    controller = module.get<ActiviteitenPlanningController>(ActiviteitenPlanningController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
