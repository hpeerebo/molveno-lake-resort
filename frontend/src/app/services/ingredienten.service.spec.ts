import { TestBed } from '@angular/core/testing';

import { IngredientenService } from './ingredienten.service';

describe('IngredientenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngredientenService = TestBed.get(IngredientenService);
    expect(service).toBeTruthy();
  });
});
