import { Test, TestingModule } from '@nestjs/testing';
import { KamerreserveringService } from './kamerreservering.service';

describe('KamerreserveringService', () => {
  let service: KamerreserveringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KamerreserveringService],
    }).compile();

    service = module.get<KamerreserveringService>(KamerreserveringService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
