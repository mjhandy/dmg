import { Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { routes } from '../../../app.routes';

interface SiteMapEntry {
  path: string;
  label: string;
  children?: SiteMapEntry[];
}

@Component({
  selector: 'app-site-map',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './site-map.html',
  styleUrl: './site-map.scss'
})
export class SiteMap {
  siteMapEntries: SiteMapEntry[] = this.buildSiteMap();

  private buildSiteMap(): SiteMapEntry[] {
    return this.flattenRoutes(routes);
  }

  private flattenRoutes(routes: Routes, parentPath = ''): SiteMapEntry[] {
    return routes.flatMap(route => {
      if (route.redirectTo !== undefined || route.path === undefined) {
        return [];
      }

      const routePath = this.routePath(parentPath, route.path);
      const label = route.data?.['label'] || route.title || '';
      const children = route.children ? this.flattenRoutes(route.children, routePath === '/' ? '' : routePath) : [];

      if (!label) {
        return children;
      }

      const showInSiteMap = route.data?.['showInSiteMap'] !== false;
      if (!showInSiteMap) {
        return children;
      }

      const link = routePath === '/' ? '/' : `/${routePath}`;
      const entry: SiteMapEntry = { path: link, label };
      if (children.length) {
        entry.children = children;
      }

      return [entry];
    });
  }

  private routePath(parentPath: string, segment: string): string {
    if (segment === '') {
      return parentPath || '/';
    }

    return parentPath ? `${parentPath}/${segment}` : segment;
  }
}
