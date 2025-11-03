import { Component } from '@angular/core';
import { HeroBanner } from '../../global/hero-banner/hero-banner';

import { TestimonialsService } from '../../../services/testimonials';
import { Testimonials } from '../../global/testimonials/testimonials';

import { OnPageImage } from '../../../services/on-page-images.service';
import { BodyImage } from "../../global/body-image/body-image";


@Component({
  selector: 'app-services',
  imports: [HeroBanner, Testimonials, BodyImage],
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
