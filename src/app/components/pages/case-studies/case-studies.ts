import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { HeroBanner } from '../../global/hero-banner/hero-banner';



@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [HeroBanner, RouterModule],
  templateUrl: './case-studies.html',
  styleUrl: './case-studies.scss'
})
export class CaseStudies {
  parentComp = "page-caseStudies";
  showOverview = true;

  constructor(
    private router: Router
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Show overview only when we're at the exact /case-studies route
      this.showOverview = event.url === '/case-studies';
      console.log('CaseStudies route changed:', event.url, 'showOverview:', this.showOverview);
    });
  }

  ngOnInit() {
    // console.log('CaseStudies component initialized');
  }

}
