import { Test, TestingModule } from '@nestjs/testing';
import { ActiviteitenController } from './activiteiten.controller';

describe('Activiteiten Controller', () => {
  let controller: ActiviteitenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActiviteitenController],
    }).compile();

    controller = module.get<ActiviteitenController>(ActiviteitenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
