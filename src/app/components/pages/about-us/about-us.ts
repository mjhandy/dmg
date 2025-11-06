import { Component } from '@angular/core';

import { HeroBanner } from '../../global/hero-banner/hero-banner';

import { TestimonialsService } from '../../../services/testimonials';
import { Testimonials } from '../../global/testimonials/testimonials';

@Component({
  selector: 'app-about-us',
  imports: [HeroBanner, Testimonials],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss'
})
export class AboutUs {
  parentComp = "page-aboutUs";
  review: any;

    constructor(
    private testimonialService: TestimonialsService
  ){}

  ngOnInit(){
    this.testimonialService.getTestimonials()
      .subscribe(Response => {
        this.review = Response;
      })
  }  
}
