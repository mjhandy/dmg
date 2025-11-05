import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

import { ReadOnRouteChange } from './read-on-route-change';

describe('ReadOnRouteChange', () => {
  let component: ReadOnRouteChange;
  let fixture: ComponentFixture<ReadOnRouteChange>;
  let events$: Subject<any>;
  let mockRouter: Partial<Router>;
  let metaContent = 'initial description';

  beforeEach(async () => {
    events$ = new Subject();
    mockRouter = { events: events$.asObservable() };

    await TestBed.configureTestingModule({
      declarations: [ReadOnRouteChange],
      providers: [
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    // Ensure a meta description exists on the document for the component's fallback path
    let metaEl = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaEl) {
      metaEl = document.createElement('meta');
      metaEl.setAttribute('name', 'description');
      document.head.appendChild(metaEl);
    }
    metaEl.content = metaContent;

    fixture = TestBed.createComponent(ReadOnRouteChange);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    events$.complete();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('reads meta description on init (document fallback)', () => {
    expect(component.description).toBe('initial description');
    const el = fixture.nativeElement.querySelector('.hide');
    expect(el.textContent.trim()).toBe('initial description');
  });

  it('updates description on NavigationEnd', () => {
    metaContent = 'after navigation description';
    const metaEl = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    metaEl.content = metaContent;

    events$.next(new NavigationEnd(1, '/from', '/to'));
    return new Promise(resolve => setTimeout(resolve, 0)).then(() => {
      fixture.detectChanges();
      expect(component.description).toBe('after navigation description');
      const el = fixture.nativeElement.querySelector('.hide');
      expect(el.textContent.trim()).toBe('after navigation description');
    });
  });

  it('stops listening after destroy', () => {
    metaContent = 'before destroy';
    const metaEl = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    metaEl.content = metaContent;
    events$.next(new NavigationEnd(2, '/a', '/b'));

    return new Promise(resolve => setTimeout(resolve, 0)).then(() => {
      fixture.detectChanges();
      expect(component.description).toBe('before destroy');

      fixture.destroy();
      metaContent = 'after destroy';
      metaEl.content = metaContent;
      events$.next(new NavigationEnd(3, '/c', '/d'));

      return new Promise(resolve2 => setTimeout(resolve2, 0)).then(() => {
        expect(component.description).toBe('before destroy');
      });
    });
  });
});
