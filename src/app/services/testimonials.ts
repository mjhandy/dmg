import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  private url = '../json/testimonials.json';
  private testimonials$: Observable<any> | null = null;

  constructor(private httpClient: HttpClient) {
  }

  getTestimonials(): Observable<any> {
    if (!this.testimonials$) {
      this.testimonials$ = this.httpClient.get<any>(this.url).pipe(
        map(data => {
          const t = data.filter((reviews: any) => reviews.live === true);
          return t;
        }),
        shareReplay(1)
      );
    }
    return this.testimonials$;
  }

}
