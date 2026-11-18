import { Component } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.scss'
})
export class BackToTop {
  backToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.focus({ preventScroll: true });
  }
}
