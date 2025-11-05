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
      description: 'Dundee Media Group. Where Digital Visability Meets Inclusive Design.',
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
      description: "Discover a digital agency that blends SEO, accessibility, and design into unforgettable experiences—visible, inclusive, and built to connect.",
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
      description: 'Learn about who we are at Dundee Media Group',
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
      description: 'How have we helped other here at Dundee Media Group?',
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
      description: 'Reach our and talk to us',
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
      description: "Looking for a page? Here's a map.",
      label: 'Site Map',
      showInMain: false,
      showInFooter: true,
      showInSiteMap: false,
    }
  },
];
