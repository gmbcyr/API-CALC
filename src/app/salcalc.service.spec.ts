import { TestBed } from '@angular/core/testing';

import { SalcalcService } from './salcalc.service';

describe('SalcalcService', () => {
  let service: SalcalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalcalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
