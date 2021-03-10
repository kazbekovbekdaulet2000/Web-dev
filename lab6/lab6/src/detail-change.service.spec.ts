import { TestBed } from '@angular/core/testing';

import { DetailChangeService } from './detail-change.service';

describe('DetailChangeService', () => {
  let service: DetailChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
