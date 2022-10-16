import { TestBed } from '@angular/core/testing';

import { RegstrationDeactiveGuard } from './regstration-deactive.guard';

describe('RegstrationDeactiveGuard', () => {
  let guard: RegstrationDeactiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegstrationDeactiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
