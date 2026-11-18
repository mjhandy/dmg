import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FooterLogo } from './footer-logo/footer-logo';
import { FooterNav } from './footer-nav/footer-nav';
import { FooterSocial } from './footer-social/footer-social';
import { BackToTop } from './back-to-top/back-to-top';

@Component({
  selector: 'app-footer',
  imports: [FooterLogo, FooterNav, FooterSocial, BackToTop, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  currentYear: number = new Date().getFullYear();

}
