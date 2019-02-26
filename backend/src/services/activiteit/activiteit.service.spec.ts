import { Test, TestingModule } from '@nestjs/testing';
import { ActiviteitService } from './activiteit.service';

describe('ActiviteitService', () => {
  let service: ActiviteitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActiviteitService],
    }).compile();

    service = module.get<ActiviteitService>(ActiviteitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
