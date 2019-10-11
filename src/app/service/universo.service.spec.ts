import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UniversoService } from './universo.service';

describe('UniversoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ], 
    providers: [ UniversoService ]
  }));

  it('should be created', () => {
    const service: UniversoService = TestBed.get(UniversoService);
    expect(service).toBeTruthy();
  });
});
