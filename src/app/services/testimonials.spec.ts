import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TestimonialsService } from './testimonials';

describe('TestimonialsService', () => {
  let service: TestimonialsService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();
    service = TestBed.inject(TestimonialsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('loads live testimonials from the site-relative JSON file', () => {
    let testimonials: { live: boolean; name: string }[] | undefined;
    service.getTestimonials().subscribe(data => testimonials = data);

    const request = httpTestingController.expectOne('json/testimonials.json');
    expect(request.request.method).toBe('GET');
    request.flush([
      { live: true, name: 'Published review' },
      { live: false, name: 'Unpublished review' }
    ]);

    expect(testimonials).toEqual([{ live: true, name: 'Published review' }]);
  });
});
