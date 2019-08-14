import { TestBed } from '@angular/core/testing';

import { NgxHandleErrorService } from './ngx-handle-error.service';

describe('NgxHandleErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxHandleErrorService = TestBed.get(NgxHandleErrorService);
    expect(service).toBeTruthy();
  });
});
