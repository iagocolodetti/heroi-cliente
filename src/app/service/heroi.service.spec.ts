import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeroiService } from './heroi.service';

describe('HeroiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ], 
    providers: [ HeroiService ]
  }));

  it('should be created', () => {
    const service: HeroiService = TestBed.get(HeroiService);
    expect(service).toBeTruthy();
  });
});
