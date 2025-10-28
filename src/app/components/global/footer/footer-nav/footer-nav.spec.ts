import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNav } from './footer-nav';

describe('FooterNav', () => {
  let component: FooterNav;
  let fixture: ComponentFixture<FooterNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
