import { Component } from '@angular/core';
import { HeroBanner } from '../../global/hero-banner/hero-banner';


@Component({
  selector: 'app-contact-us',
  imports: [HeroBanner],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss'
})
export class ContactUs {
  parentComp = "page-contactUs";

}
