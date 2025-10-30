import { Component } from '@angular/core';
import { HeroBanner } from '../../global/hero-banner/hero-banner';
@Component({
  selector: 'app-home',
  imports: [HeroBanner],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  parentComp = "page-home";


}
