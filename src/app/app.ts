import { Component, signal } from '@angular/core';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { MatIconRegistry, MatIconModule } from '@angular/material/icon';

import { ReadOnRouteChange } from './components/wcag/read-on-route-change/read-on-route-change';
import { SkipToMain } from './components/wcag/skip-to-main/skip-to-main';
import { Header } from './components/global/header/header';
import { Footer } from './components/global/footer/footer';

import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet, ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    MatIconModule, 
    ReadOnRouteChange,
    SkipToMain,
    Header, 
    Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dmg');
  private iconPath = '/assets/';



  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private metaService: Meta,
    private titleService: Title,
  ) {

    this.matIconRegistry
      .addSvgIcon(
        "site-logo",
        this.setPath(`${this.iconPath}logo_horizontal.svg`)
      );


  }


  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.getChild(this.activatedRoute)),
        map(route => route.snapshot.data)
      )
      .subscribe(data => {
        // Update meta description
        if (data['description']) {
          this.metaService.updateTag({ name: 'description', content: data['description'] });
        } else {
          this.metaService.removeTag("name='description'");
        }
      });
  }

  private getChild(route: ActivatedRoute): ActivatedRoute {
    return route.firstChild ? this.getChild(route.firstChild) : route;
  }


  setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
