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
    loadComponent: () => import('./components/pages/services/services').then(m => m.Services),
    title: 'Services | Dundee Media Group',
    data: {
      desciption: "Dundee Media Group's offered services, from SEO to WCAG",
      label: 'Services',
      showInMain: true,
      showInFooter: true,
      showInSiteMap: true,
    }
  },
  {
    path: 'about-us',
    loadComponent: () => import('./components/pages/about-us/about-us').then(m => m.AboutUs),
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
    loadComponent: () => import('./components/pages/case-studies/case-studies').then(m => m.CaseStudies),
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
    loadComponent: () => import('./components/pages/contact-us/contact-us').then(m => m.ContactUs),
    title: 'Contact Us | Dundee Media Group',
    data: {
      desciption: 'This is the Web Prototype home page',
      label: 'Contact Us',
      showInMain: true,
      showInFooter: true,
      showInSiteMap: true,
    }
  },
  {
    path: 'site-map',
    loadComponent: () => import('./components/pages/site-map/site-map').then(m => m.SiteMap),
    title: 'Site Map | Dundee Media Group',
    data: {
      desciption: 'This is the Web Prototype home page',
      label: 'Site Map',
      showInMain: false,
      showInFooter: true,
      showInSiteMap: false,
    }
  },
];
