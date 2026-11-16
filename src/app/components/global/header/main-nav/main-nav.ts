import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

import { Logo } from '../logo/logo';
import { RouterModule, Router } from '@angular/router';
import Dropdown from 'bootstrap/js/src/dropdown.js';
import Collapse from 'bootstrap/js/src/collapse.js';


@Component({
  selector: 'app-main-nav',
  imports: [Logo, RouterModule],
  templateUrl: './main-nav.html',
  styleUrl: './main-nav.scss'
})
export class MainNav implements AfterViewInit, OnDestroy {

  @ViewChild('mainNav', { static: true }) mainNav!: ElementRef<HTMLElement>;

  private dropdowns: Dropdown[] = [];
  private collapse?: Collapse;

  routes: {
    path: string;
    title: string;
    label: string;
    children?: { path: string; title?: string; label?: string }[];
  }[] = [];

  constructor(private router: Router) {
    // Filter routes that have a valid `path` and `title`, then map to the required type
    this.routes = this.router.config
      .filter(
        route => route.path &&
          typeof route.title === 'string' &&
          route.data && route.data['label'] &&
          route.data['showInMain'] === true
      )
      .map(route => {
        const children = (route.children || [])
          .filter(child => child.path && child.data && child.data['label'])
          .map(child => ({
            path: child.path!,
            title: child.title as string | undefined,
            label: child.data!['label']
          }));

        return {
          path: route.path!,
          title: route.title as string,
          label: route.data!['label'],
          children: children.length ? children : undefined
        };
      });
  }

  ngAfterViewInit(): void {
    const toggles = this.mainNav.nativeElement.querySelectorAll<HTMLElement>(
      '[data-bs-toggle="dropdown"]'
    );
    this.dropdowns = Array.from(toggles, toggle => new Dropdown(toggle));
    const collapseElement = this.mainNav.nativeElement.querySelector<HTMLElement>('#navbarContent');
    if (collapseElement) {
      this.collapse = new Collapse(collapseElement, { toggle: false });
    }
  }

  ngOnDestroy(): void {
    this.dropdowns.forEach(dropdown => dropdown.dispose());
    this.collapse?.dispose();
  }

  closeMenu(): void {
    this.collapse?.hide();
  }

  trackMainNavUsage(label: string | undefined): void {
    if (!label) {
      return;
    }

    
    console.debug('Tracking main nav usage:', label);
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'Main Nav Usage', {
        event_category: 'Navigation',
        event_label: label,
      });
    }
    this.closeMenu();
  }

}
