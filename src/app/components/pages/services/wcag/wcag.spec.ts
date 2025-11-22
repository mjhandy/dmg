import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wcag } from './wcag';

describe('Wcag', () => {
  let component: Wcag;
  let fixture: ComponentFixture<Wcag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wcag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wcag);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
