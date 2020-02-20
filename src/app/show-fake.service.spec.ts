import { TestBed } from '@angular/core/testing';

import { ShowFakeService } from './show-fake.service';

describe('ShowFakeService', () => {
  let service: ShowFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
