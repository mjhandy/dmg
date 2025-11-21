import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';

import { MatIcon } from '@angular/material/icon';
import { HeroBanner } from '../../global/hero-banner/hero-banner';

import { CardsCasestudies } from '../../global/cards/cards-casestudies/cards-casestudies';

import { TestimonialsService } from '../../../services/testimonials';
import { Testimonials } from '../../global/testimonials/testimonials';
@Component({
  selector: 'app-home',
  imports: [HeroBanner, Testimonials, CardsCasestudies, MatButton, MatIcon],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  parentComp = "page-home";
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
