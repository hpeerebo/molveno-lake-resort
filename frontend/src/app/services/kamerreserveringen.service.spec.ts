import { TestBed } from '@angular/core/testing';

import { KamerreserveringenService } from './kamerreserveringen.service';

describe('KamerreserveringenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KamerreserveringenService = TestBed.get(KamerreserveringenService);
    expect(service).toBeTruthy();
  });
});
