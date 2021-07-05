import { TestBed } from '@angular/core/testing';

import { NgxIntersectObserverService } from './ngx-intersect-observer.service';

describe('NgxIntersectObserverService', () => {
  let service: NgxIntersectObserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxIntersectObserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
