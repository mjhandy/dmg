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
    title: 'Home Page | Dundee Media Group',
    data: {
      desciption: 'This is the Web Prototype home page',
      label: 'Home',
      showInMain: false,
      showInFooter: true,
      showInSiteMap: true,
    }
  },
  {
    path: 'services',
    loadComponent: () => import('./components/pages/home/home').then(m => m.Home),
    title: 'Services | Dundee Media Group',
    data: {
      desciption: 'This is the Web Prototype home page',
      label: 'Services',
      showInMain: true,
      showInFooter: true,
      showInSiteMap: true,
    }
  },  
];
