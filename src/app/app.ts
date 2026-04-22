import { Component, signal } from '@angular/core';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


import { ReadOnRouteChange } from './components/wcag/read-on-route-change/read-on-route-change';
import { SkipToMain } from './components/wcag/skip-to-main/skip-to-main';
import { Header } from './components/global/header/header';
import { Footer } from './components/global/footer/footer';

import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet, ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,  
    ReadOnRouteChange,
    SkipToMain,
    Header, 
    Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dmg');



  constructor(
    private domSanitizer: DomSanitizer,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private metaService: Meta,
  ) {



  }


  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
      )
      .subscribe((event: NavigationEnd) => {
        const route = this.getChild(this.activatedRoute);

        // Update meta description
        const data = route.snapshot.data;
        if (data['description']) {
          this.metaService.updateTag({ name: 'description', content: data['description'] });
        } else {
          this.metaService.removeTag("name='description'");
        }

        // Set body class based on route
        const pageClass = this.getPageClass(route);
        document.body.className = pageClass ? pageClass : '';

        // Track route change as a Google Analytics page view
        this.trackPageView(event.urlAfterRedirects);
      });
  }

  private trackPageView(url: string): void {
    console.log('Tracking page view for URL:', url);
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('config', 'G-T1M6ZYNRKR', {
        page_path: url,
      });
    }
  }

  private getChild(route: ActivatedRoute): ActivatedRoute {
    return route.firstChild ? this.getChild(route.firstChild) : route;
  }

  private getPageClass(route: ActivatedRoute): string | null {
    // Try to get the route name from route config or path
    const routeConfig = route.routeConfig;
    if (routeConfig) {
      if (routeConfig.path === '') {
        return 'home';
      }
      switch (routeConfig.path) {
        case 'services':
          return 'services';
        case 'about-us':
          return 'aboutUs';
        case 'case-studies':
          return 'caseStudies';
        case 'contact-us':
          return 'contactUs';
        default:
          break;
      }
    }
    // Fallback: use route data label if available
    const data = route.snapshot.data;
    if (data && data['label']) {
      switch (data['label']) {
        case 'Home':
          return 'home';
        case 'Services':
          return 'services';
        case 'About Us':
          return 'aboutUs';
        case 'Case Studies':
          return 'caseStudies';
        case 'Contact Us':
          return 'contactUs';
        default:
          return null;
      }
    }
    return null;
  }


  setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
