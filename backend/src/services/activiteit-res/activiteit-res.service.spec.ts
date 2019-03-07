import { Test, TestingModule } from '@nestjs/testing';
import { ActiviteitResService } from './activiteit-res.service';

describe('ActiviteitResService', () => {
  let service: ActiviteitResService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActiviteitResService],
    }).compile();

    service = module.get<ActiviteitResService>(ActiviteitResService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
