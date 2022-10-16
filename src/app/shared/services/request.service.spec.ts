import { TestBed } from '@angular/core/testing';

import { IsRecovedPassService } from './behavior-subjects.service';

describe('IsRecovedPassService', () => {
  let service: IsRecovedPassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsRecovedPassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
