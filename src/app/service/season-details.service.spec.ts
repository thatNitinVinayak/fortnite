import { TestBed } from '@angular/core/testing';

import { SeasonDetailsService } from './season-details.service';

describe('SeasonDetailsService', () => {
  let service: SeasonDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeasonDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
