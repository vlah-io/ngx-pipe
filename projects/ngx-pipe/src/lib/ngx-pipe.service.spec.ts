import { TestBed } from '@angular/core/testing';

import { NgxPipeService } from './ngx-pipe.service';

describe('NgxPipeService', () => {
  let service: NgxPipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
