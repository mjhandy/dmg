import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { MatIcon } from '@angular/material/icon';

export interface BreadcrumbItem {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  imports: [RouterModule, MatIcon],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss',
})
export class Breadcrumb implements OnInit, OnDestroy {
  items: BreadcrumbItem[] = [];
  private routerSubscription?: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.updateBreadcrumbs();
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.updateBreadcrumbs());
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  private updateBreadcrumbs(): void {
    const segments: BreadcrumbItem[] = [{ label: 'Home', url: '/' }];
    let route = this.activatedRoute.root;

    while (route.firstChild) {
      route = route.firstChild;
      const snapshot = route.snapshot;
      const label = snapshot.data['label'] as string | undefined;
      const segment = snapshot.url.map((urlSegment) => urlSegment.path).join('/');

      if (!label || snapshot.routeConfig?.path === '') {
        continue;
      }

      if (segment) {
        segments.push({
          label,
          url: `/${segment ? this.buildUrl(route) : ''}`,
        });
      }
    }

    this.items =
      segments.length > 1
        ? segments.filter((item, index, all) => all.findIndex((entry) => entry.url === item.url) === index)
        : [];
  }

  private buildUrl(route: ActivatedRoute): string {
    return route.pathFromRoot
      .flatMap((activatedRoute) => activatedRoute.snapshot.url)
      .map((urlSegment) => urlSegment.path)
      .filter(Boolean)
      .join('/');
  }
}
