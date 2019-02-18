import { TestBed } from '@angular/core/testing';

import { AppguardService } from './appguard.service';

describe('AppguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppguardService = TestBed.get(AppguardService);
    expect(service).toBeTruthy();
  });
});
