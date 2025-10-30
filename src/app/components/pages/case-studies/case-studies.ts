import { Component } from '@angular/core';
import { HeroBanner } from '../../global/hero-banner/hero-banner';


@Component({
  selector: 'app-case-studies',
  imports: [HeroBanner],
  templateUrl: './case-studies.html',
  styleUrl: './case-studies.scss'
})
export class CaseStudies {
  parentComp = "page-caseStudies";

}
