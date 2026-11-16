import { fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { MainNav } from './main-nav';

describe('MainNav', () => {
  let component: MainNav;
  let fixture: ComponentFixture<MainNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainNav],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open and close the mobile navigation', fakeAsync(() => {
    const toggle = fixture.nativeElement.querySelector('.navbar-toggler') as HTMLButtonElement;
    const menu = fixture.nativeElement.querySelector('#navbarContent') as HTMLElement;

    toggle.click();
    tick(500);
    expect(menu.classList.contains('show')).toBeTrue();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');

    component.closeMenu();
    tick(500);
    expect(menu.classList.contains('show')).toBeFalse();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  }));
});
