import { TestBed } from '@angular/core/testing';

import { ActiviteitenService } from './activiteiten.service';

describe('ActiviteitenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActiviteitenService = TestBed.get(ActiviteitenService);
    expect(service).toBeTruthy();
  });
});
