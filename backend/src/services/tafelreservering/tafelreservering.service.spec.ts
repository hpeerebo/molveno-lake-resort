import { Test, TestingModule } from '@nestjs/testing';
import { TafelreserveringService } from './tafelreservering.service';

describe('TafelreserveringService', () => {
  let service: TafelreserveringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TafelreserveringService],
    }).compile();

    service = module.get<TafelreserveringService>(TafelreserveringService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
