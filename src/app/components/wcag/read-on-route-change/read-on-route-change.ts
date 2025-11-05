import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-read-on-route-change',
  imports: [],
  templateUrl: './read-on-route-change.html',
  styleUrl: './read-on-route-change.scss'
})
export class ReadOnRouteChange implements OnInit, OnDestroy {
  description = '';
  private sub: Subscription | null = null;

  constructor(private router: Router, private meta: Meta) {}

  ngOnInit(): void {
    // Update on initial load and on subsequent navigation end events
    const update = () => {
      // Prefer meta service, fallback to document query for robustness
      const tag = this.meta.getTag('name="description"') as HTMLMetaElement | null;
      if (tag && tag.content) {
        this.description = tag.content;
        return;
      }
      const el = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      this.description = el?.content ?? '';
    };

    update();

    this.sub = this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      // allow other code to update the meta tag before we read it
      setTimeout(update, 0);
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
