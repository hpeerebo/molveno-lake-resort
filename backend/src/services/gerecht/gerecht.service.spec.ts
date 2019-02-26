import { Test, TestingModule } from '@nestjs/testing';
import { GerechtService } from './gerecht.service';

describe('GerechtService', () => {
  let service: GerechtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GerechtService],
    }).compile();

    service = module.get<GerechtService>(GerechtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
