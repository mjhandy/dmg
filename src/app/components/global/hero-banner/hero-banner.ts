import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.scss'
})
export class HeroBanner implements OnInit, OnDestroy {
  @Input() parent!: string;
  banners: Record<string, any> = {};

  // computed values used by the template
  imgDesktop: string = '';
  imgMobile: string = '';
  h1Html: string = '';
  h2Html: string = '';
  positionClass: string = '';

  private routerSub?: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    // try {
    //   const res = await fetch('/json/hero-banners.json');
    //   if (!res.ok) throw new Error(`Failed to load hero banners: ${res.status}`);
    //   const data = await res.json();
    //   if (Array.isArray(data)) {
    //     this.banners = Object.assign({}, ...data);
    //   } else {
    //     this.banners = data;
    //   }
    // } catch (err) {
    //   this.banners = {};
    // }

    // initialize from current route and listen for navigation changes
    this.updateFromRoute(this.activatedRoute);
    this.routerSub = this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      this.updateFromRoute(this.activatedRoute);
    });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  private updateFromRoute(route: ActivatedRoute): void {
    // find the deepest activated route to read data
    let r: ActivatedRoute | null = route;
    while (r.firstChild) {
      r = r.firstChild;
    }
    const data = r?.snapshot?.data || {};
    const d: any = data;

    if (d && (d.h1 || d.desktopImage || d.mobileImage || d.headerPostion)) {
      this.h1Html = d.h1 || '';
      this.h2Html = d.h2 || '';
      this.imgDesktop = d.desktopImage || '';
      this.imgMobile = d.mobileImage || '';
      this.positionClass = d.headerPostion || '';
      return;
    }

    // fallback to banners[parent] if route data is not present
    if (this.parent && this.banners && this.banners[this.parent]) {
      const b = this.banners[this.parent];
      // JSON keys in the existing hero data may use different names; try common ones
      this.h1Html = b.h1 || b.title || '';
      this.h2Html = b.h2 || b.subtitle || '';
      this.imgDesktop = b.bgImageDesktop || b.desktopImage || '';
      this.imgMobile = b.bgImageMobile || b.mobileImage || '';
      this.positionClass = b.position || b.headerPostion || '';
      return;
    }

    // no data found — clear
    this.h1Html = '';
    this.h2Html = '';
    this.imgDesktop = '';
    this.imgMobile = '';
    this.positionClass = '';
  }
}
