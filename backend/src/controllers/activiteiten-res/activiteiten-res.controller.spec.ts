import { Test, TestingModule } from '@nestjs/testing';
import { ActiviteitenResController } from './activiteiten-res.controller';

describe('ActiviteitenRes Controller', () => {
  let controller: ActiviteitenResController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActiviteitenResController],
    }).compile();

    controller = module.get<ActiviteitenResController>(ActiviteitenResController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
