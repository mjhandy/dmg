import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { MatIconRegistry, MatIconModule } from '@angular/material/icon';

import { Header } from './components/global/header/header';
import { Footer } from './components/global/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dmg');
  private iconPath = '/assets/';

  constructor(
    private matIconRegistry: MatIconRegistry,

    private domSanitizer: DomSanitizer,
  ) {

    this.matIconRegistry
      .addSvgIcon(
        "site-logo",
        this.setPath(`${this.iconPath}logo_horizontal.svg`)
      );


  }


  setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
