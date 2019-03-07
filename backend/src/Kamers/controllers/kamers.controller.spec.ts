import { Test, TestingModule } from '@nestjs/testing';
import { KamersController } from './kamers.controller';

describe('Kamers Controller', () => {
  let controller: KamersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KamersController],
    }).compile();

    controller = module.get<KamersController>(KamersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
