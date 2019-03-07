import { TestBed } from '@angular/core/testing';

import { ActiviteitenResService } from './activiteiten-res.service';

describe('ActiviteitenResService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActiviteitenResService = TestBed.get(ActiviteitenResService);
    expect(service).toBeTruthy();
  });
});
