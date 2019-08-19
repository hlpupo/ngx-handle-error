import { TestBed } from '@angular/core/testing';

import { ServerErrorService } from './server-error.service';

describe('ServerErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerErrorService = TestBed.get(ServerErrorService);
    expect(service).toBeTruthy();
  });
});
