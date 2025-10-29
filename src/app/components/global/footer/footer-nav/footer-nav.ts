import { Component } from '@angular/core';

import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-footer-nav',
  imports: [RouterModule],
  templateUrl: './footer-nav.html',
  styleUrl: './footer-nav.scss'
})
export class FooterNav {
  routes: {
    path: string;
    title: string;
    label: string;
  }[] = [];

  constructor(private router: Router) {
    // Filter routes that have a valid `path` and `title`, then map to the required type
    this.routes = this.router.config
      .filter(
        route => route.path &&
          typeof route.title === 'string' &&
          route.data && route.data['label'] &&
          route.data['showInFooter'] === true
      )
      .map(route => ({
        path: route.path!,
        title: route.title as string,
        label: route.data!['label']
      }));
  }
}
