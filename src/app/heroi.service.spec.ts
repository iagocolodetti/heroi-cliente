import { TestBed } from '@angular/core/testing';

import { HeroiService } from './heroi.service';

describe('HeroiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroiService = TestBed.get(HeroiService);
    expect(service).toBeTruthy();
  });
});
