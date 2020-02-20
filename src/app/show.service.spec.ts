import { TestBed, ɵTestingCompiler } from '@angular/core/testing';

import { ShowService } from './show.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ShowService', () => {
  let service: ShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
