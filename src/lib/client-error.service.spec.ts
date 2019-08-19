import { TestBed } from '@angular/core/testing';

import { ClientErrorService } from './client-error.service';

describe('ClientErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientErrorService = TestBed.get(ClientErrorService);
    expect(service).toBeTruthy();
  });
});
