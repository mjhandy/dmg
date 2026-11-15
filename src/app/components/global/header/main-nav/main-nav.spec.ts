import { ComponentFixture, TestBed } from '@angular/core/testing';
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
});
