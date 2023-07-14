import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { matchingGuard } from './matching.guard';

describe('matchingGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => matchingGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
