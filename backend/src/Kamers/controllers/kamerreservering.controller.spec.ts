import { Test, TestingModule } from '@nestjs/testing';
import { KamerreserveringController } from './kamerreservering.controller';

describe('Kamerreservering Controller', () => {
  let controller: KamerreserveringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KamerreserveringController],
    }).compile();

    controller = module.get<KamerreserveringController>(KamerreserveringController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
