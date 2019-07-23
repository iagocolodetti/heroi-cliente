import { TestBed } from '@angular/core/testing';

import { UniversoService } from './universo.service';

describe('UniversoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniversoService = TestBed.get(UniversoService);
    expect(service).toBeTruthy();
  });
});
