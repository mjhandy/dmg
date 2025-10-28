import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLogo } from './footer-logo';

describe('FooterLogo', () => {
  let component: FooterLogo;
  let fixture: ComponentFixture<FooterLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterLogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
