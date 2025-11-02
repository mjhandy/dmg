import { TestBed } from '@angular/core/testing';

import { Testimonials } from './testimonials';

describe('Testimonials', () => {
  let service: Testimonials;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Testimonials);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
