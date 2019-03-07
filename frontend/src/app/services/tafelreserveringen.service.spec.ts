import { TestBed } from '@angular/core/testing';

import { TafelreserveringenService } from './tafelreserveringen.service';

describe('TafelreserveringenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TafelreserveringenService = TestBed.get(TafelreserveringenService);
    expect(service).toBeTruthy();
  });
});
