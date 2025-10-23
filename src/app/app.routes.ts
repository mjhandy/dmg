import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    loadComponent: () => import('./components/pages/home/home').then(m => m.Home),
    title: 'English Home Page | Dundee Media Group',
    data: {
      desciption: 'This is the Web Prototype home page',
      label: 'nav.home',
      showInFooter: true,
      showInSiteMap: true,
    }
  },
];
