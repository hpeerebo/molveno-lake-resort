import { TestBed } from '@angular/core/testing';

import { TafelsService } from './tafels.service';

describe('TafelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TafelsService = TestBed.get(TafelsService);
    expect(service).toBeTruthy();
  });
});
