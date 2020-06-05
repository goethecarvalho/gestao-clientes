import { TestBed } from '@angular/core/testing';

import { AppGuardService } from './appguard.service';

describe('AppGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppGuardService = TestBed.get(AppGuardService);
    expect(service).toBeTruthy();
  });
});
