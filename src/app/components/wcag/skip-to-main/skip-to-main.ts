import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skip-to-main',
  imports: [],
  templateUrl: './skip-to-main.html',
  styleUrl: './skip-to-main.scss'
})
export class SkipToMain {

  skipLinkPath: string | undefined;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    // skip to main
    this.skipLinkPath = `${this.router.url}#main`;
  }

  skipToMain(id: string) {
    let el = document.getElementById(id);
    el?.setAttribute('tabindex', '-1');
    el?.focus();
  }

}
