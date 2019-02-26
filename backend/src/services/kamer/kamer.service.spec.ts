import { Test, TestingModule } from '@nestjs/testing';
import { KamerService } from './kamer.service';

describe('KamerService', () => {
  let service: KamerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KamerService],
    }).compile();

    service = module.get<KamerService>(KamerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
