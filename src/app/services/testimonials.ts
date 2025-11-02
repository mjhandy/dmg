import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  private url = '../json/testimonials.json';

  constructor(private httpClient: HttpClient) {

  }

  getTestimonials(): Observable<any> {
    return this.httpClient.get<any>(this.url).pipe(
      map(data => {
        const t = data.filter((reviews: any) => reviews.live === true);
        return t;
      })
    );
  }

}
