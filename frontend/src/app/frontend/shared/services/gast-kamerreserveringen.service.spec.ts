import { TestBed } from '@angular/core/testing';

import { GastKamerReserveringenService } from './gast-kamerreserveringen.service';

describe('GastKamerReserveringenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GastKamerReserveringenService = TestBed.get(GastKamerReserveringenService);
    expect(service).toBeTruthy();
  });
});
