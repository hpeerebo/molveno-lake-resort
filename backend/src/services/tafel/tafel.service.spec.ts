import { Test, TestingModule } from '@nestjs/testing';
import { TafelService } from './tafel.service';

describe('TafelService', () => {
  let service: TafelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TafelService],
    }).compile();

    service = module.get<TafelService>(TafelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
