import { TestBed } from '@angular/core/testing';

import { GerechtenService } from './gerechten.service';

describe('GerechtenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GerechtenService = TestBed.get(GerechtenService);
    expect(service).toBeTruthy();
  });
});
