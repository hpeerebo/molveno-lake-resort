import { TestBed } from '@angular/core/testing';

import { SortGridService } from './sort-grid.service';

describe('SortGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SortGridService = TestBed.get(SortGridService);
    expect(service).toBeTruthy();
  });
});
