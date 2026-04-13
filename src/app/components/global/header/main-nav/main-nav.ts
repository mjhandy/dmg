import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Logo } from '../logo/logo';
import { RouterModule, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';




@Component({
  selector: 'app-main-nav',
  imports: [Logo, MatIconModule, RouterModule, CommonModule],
  templateUrl: './main-nav.html',
  styleUrl: './main-nav.scss'
})
export class MainNav {

  @ViewChild('closeButton') closeButton: ElementRef<HTMLElement> | undefined

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

  closeMenu(){
    console.debug('close menu');
    if (!this.closeButton) return;
      let el: HTMLElement = this.closeButton.nativeElement;
    el.click();
  }

  onNavClick() {
    this.closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
