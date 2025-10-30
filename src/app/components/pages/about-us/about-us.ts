import { Component } from '@angular/core';

import { HeroBanner } from '../../global/hero-banner/hero-banner';

@Component({
  selector: 'app-about-us',
  imports: [HeroBanner],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss'
})
export class AboutUs {
  parentComp = "page-aboutUs";
}
