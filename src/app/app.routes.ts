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
  {
    path: 'about-us',
    loadComponent: () => import('./components/pages/home/home').then(m => m.Home),
    title: 'About Us | Dundee Media Group',
    data: {
      desciption: 'This is the Web Prototype home page',
      label: 'About Us',
      showInMain: true,
      showInFooter: true,
      showInSiteMap: true,
    }
  },
  {
    path: 'case-studies',
    loadComponent: () => import('./components/pages/home/home').then(m => m.Home),
    title: 'Case Studies | Dundee Media Group',
    data: {
      desciption: 'This is the Web Prototype home page',
      label: 'Case Studies',
      showInMain: true,
      showInFooter: true,
      showInSiteMap: true,
    }
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./components/pages/home/home').then(m => m.Home),
    title: 'Contact Us | Dundee Media Group',
    data: {
      desciption: 'This is the Web Prototype home page',
      label: 'Contact Us',
      showInMain: true,
      showInFooter: true,
      showInSiteMap: true,
    }
  },
];
