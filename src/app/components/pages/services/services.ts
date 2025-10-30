import { Component } from '@angular/core';
import { HeroBanner } from '../../global/hero-banner/hero-banner';


@Component({
  selector: 'app-services',
  imports: [HeroBanner],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
  parentComp = "page-services";
}
