import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatButton } from '@angular/material/button';

import { MatIcon } from '@angular/material/icon';

import { HeroBanner } from '../../global/hero-banner/hero-banner';
import { TestimonialsService } from '../../../services/testimonials';
import { Testimonials } from '../../global/testimonials/testimonials';


@Component({
  selector: 'app-services',
  imports: [HeroBanner, Testimonials, RouterModule,MatButton, MatIcon ],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
  parentComp = "page-services"; // needed for hero banner
  review: any;
  showServices = true;

  constructor(
    private testimonialService: TestimonialsService,
    private router: Router
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Show overview only when we're at the exact /services route
      this.showServices = event.url === '/services';
      console.log('Services route changed:', event.url, 'showServices:', this.showServices);
    });
  }

  ngOnInit() {

    //  console.log('Services component initialized');

    this.testimonialService.getTestimonials()
      .subscribe(Response => {
        this.review = Response;
      })
  }

}
