import { TestBed } from '@angular/core/testing';

import { ActiviteitenPlanningService } from './activiteiten-planning.service';

describe('ActiviteitenPlanningService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActiviteitenPlanningService = TestBed.get(ActiviteitenPlanningService);
    expect(service).toBeTruthy();
  });
});
