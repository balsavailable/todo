import { TestBed } from '@angular/core/testing';

import { RootSecureService } from './root-secure.service';

describe('RootSecureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RootSecureService = TestBed.get(RootSecureService);
    expect(service).toBeTruthy();
  });
});
