import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TestimonialsService } from './testimonials';

describe('TestimonialsService', () => {
  let service: TestimonialsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();
    service = TestBed.inject(TestimonialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
