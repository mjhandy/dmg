import { Component } from '@angular/core';
import { HeroBanner } from '../../global/hero-banner/hero-banner';

import { TestimonialsService } from '../../../services/testimonials';
import { Testimonials } from '../../global/testimonials/testimonials';



@Component({
  selector: 'app-services',
  imports: [HeroBanner, Testimonials],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
  parentComp = "page-services"; // needed for hero banner
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
