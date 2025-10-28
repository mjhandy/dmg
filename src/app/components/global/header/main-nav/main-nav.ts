import { Component } from '@angular/core';
import { Logo } from '../logo/logo';
import { RouterModule, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-main-nav',
  imports: [Logo, MatIconModule, RouterModule],
  templateUrl: './main-nav.html',
  styleUrl: './main-nav.scss'
})
export class MainNav {
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
