import { L } from '@angular/cdk/keycodes';
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
      h1: 'Digital Visibility. <br>Human Connetion.',
      h2: 'We craft inclusive digital experiences that don’t just perform, they resonate.',
      desktopImage: 'castle-loch-bridge.webp',
      mobileImage: 'castle-loch-bridge.webp',
      headerPostion: 'left',
      ctaCopy: 'Book An Audit',
      ctaTarget: 'contact-us'
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
      h1: 'What We Do',
      desktopImage: 'train-over-bridge.webp',
      mobileImage: 'train-over-bridge.webp',
      headerPostion: 'left'
    },
    children: [
      {
        path: 'seo-visibility-growth',
        loadComponent: () => import('./components/pages/services/seo/seo').then(m => m.Seo),
        title: 'Services | Seo Visibility and Growth | Dundee Media Group',
        data: {
          description: 'Discover how Dundee Media Group transforms SEO into measurable growth. From clean code to smart content, we help you reach your KPIs with sustainable visibility.',
          label: 'SEO: From Visibility to Growth',
          showInMain: false,
          showInFooter: false,
          showInSiteMap: true,
          h1: 'SEO: From Visibility to Growth',
          h2: 'Beyond keywords, it’s your site’s foundation',
          desktopImage: 'seo.webp',
          mobileImage: 'seo.webp',
          headerPostion: 'left',
        }
      },
            {
        path: 'accessability-for-all',
        loadComponent: () => import('./components/pages/services/wcag/wcag').then(m => m.Wcag),
        title: 'Services | Accessability for All | Dundee Media Group',
        data: {
          description: 'WCAG detail page descriptoin.',
          label: 'WCAG nav label',
          showInMain: false,
          showInFooter: false,
          showInSiteMap: true,
          h1: 'Accessability for all',
          h2: 'TBD',
          desktopImage: 'train-over-bridge.webp',
          mobileImage: 'train-over-bridge.webp',
          headerPostion: 'left',
        }
      },
            {
        path: 'design-web-social-email-seo-wcag',
        loadComponent: () => import('./components/pages/services/design/design').then(m => m.Design),
        title: 'Services | Designs That Connect and Perform | Dundee Media Group',
        data: {
          description: 'Explore Dundee Media Group’s design services. From web and social to email campaigns, we deliver SEO‑optimized and WCAG‑inclusive designs that connect, perform, and drive measurable results.',
          label: 'Design Services',
          showInMain: false,
          showInFooter: false,
          showInSiteMap: true,
          h1: 'Designs That Connect and Perform',
          h2: 'Web, social, and email designs built for impact, optimized for SEO, and inclusive by WCAG standards',
          desktopImage: 'design.webp',
          mobileImage: 'design.webp',
          headerPostion: 'right',
        }
      }
    ]
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
      h1: 'Smarter Websites Start Here',
      h2: 'From visibility to accessibility, we deliver results through audits, analytics, and expert care.',
      desktopImage: 'sun-rays-over-loch.webp',
      mobileImage: 'sun-rays-over-loch.webp',
      headerPostion: 'left'
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
      h1: 'Digital Success for Every User, Every Search, Every Click',
      h2: 'Inclusive, visible, and measurable results.',
      desktopImage: 'train-over-bridge.webp',
      mobileImage: 'train-over-bridge.webp',
      headerPostion: 'left'
    },
    children: [
      {
        path: 'solving-usability',
        loadComponent: () => import('./components/pages/case-studies/solving-usability/solving-usability').then(m => m.SolvingUsability),
        title: 'Case study: Solving usability and accessibility challenges | Dundee Media Group',
        data: {
          description: 'How Dundee Media Group improved UX and met WCAG standards—validated with Google Analytics.',
          label: 'Solving Usability and Accessibility Challenges',
          showInMain: false,
          showInFooter: false,
          showInSiteMap: true,
          h1: 'Case Study: Solving Usability and Accessibility Challenges',
          h2: 'How Dundee Media Group improved UX and met WCAG standards—validated with Google Analytics.',
          desktopImage: 'accessability-computer-addon.webp',
          mobileImage: 'accessability-computer-addon.webp',
          headerPostion: 'left',
          imageMask: true
        }
      },
      {
        path: 'rejunvenating-our-digital-experience',
        loadComponent: () => import('./components/pages/case-studies/rejuvenating-digital-experience/rejuvenating-digital-experience').then(m => m.RejuvenatingDigitalExperience),
        title: 'Case Study: Rejuvenating Our Digital Experience | Dundee Media Group',
        data: {
          description: 'How Dundee Media Group Helped Our Family-Owned Spa Thrive Online',
          label: 'Rejuvenating Our Digital Experience',
          showInMain: false,
          showInFooter: false,
          showInSiteMap: true,
          h1: 'Case Study: Rejuvenating Our Digital Experience',
          h2: 'How Dundee Media Group Helped Our Family-Owned Spa Thrive Online',
          desktopImage: 'web-design.webp',
          mobileImage: 'web-design.webp',
          headerPostion: 'left'
        }
      },
      {
        path: 'turning-data-into-direction',
        loadComponent: () => import('./components/pages/case-studies/turning-data-into-direction/turning-data-into-direction').then(m => m.TurningDataIntoDirection),
        title: 'Case Study: Turning Data Into Direction | Dundee Media Group',
        data: {
          description: 'How Dundee Media Group Helped a Small Manufacturing Firm Harness Google Analytics for Smarter Engagement',
          label: 'Turning Data into Direction',
          showInMain: false,
          showInFooter: false,
          showInSiteMap: true,
          h1: 'Case Study: Turning Data into Direction',
          h2: 'How Dundee Media Group Helped a Small Manufacturing Firm Harness Google Analytics for Smarter Engagement',
          desktopImage: 'laptop-data-graphs.webp',
          mobileImage: 'laptop-data-graphs.webp',
          headerPostion: 'left',

          imageMask: true
        }
      }
    ]
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
      h1: 'What We Do',
      h2: 'We don’t just build websites.',
      desktopImage: 'train-over-bridge.webp',
      mobileImage: 'train-over-bridge.webp',
      headerPostion: 'left'
    }
  },
  {
    path: 'terms-and-conditions',
    loadComponent: () => import('./components/pages/terms/terms').then(m => m.Terms),
    title: 'Terms and Conditions | Dundee Media Group',
    data: {
      description: "Dundee Media Group's Terms and Conditions",
      label: 'Terms',
      showInMain: false,
      showInFooter: false,
      showInSiteMap: true,
      h1: 'Terms & Conditions',
      desktopImage: 'train-over-bridge.webp',
      mobileImage: 'train-over-bridge.webp',
      headerPostion: 'left'

    }
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./components/pages/privacy/privacy').then(m => m.Privacy),
    title: 'Our Privacy Policy | Dundee Media Group',
    data: {
      description: "Dundee Media Group's Privacy Policy",
      label: 'Privacy',
      showInMain: false,
      showInFooter: false,
      showInSiteMap: true,
      h1: 'Privacy Policy',
      desktopImage: 'train-over-bridge.webp',
      mobileImage: 'train-over-bridge.webp',
      headerPostion: 'left'
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
      h1: 'Site Map',
      h2: 'We don’t just build websites.',
      desktopImage: 'train-over-bridge.webp',
      mobileImage: 'train-over-bridge.webp',
      headerPostion: 'left'
    }
  },
];
