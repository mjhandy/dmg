import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsTerms } from './cards-terms';

describe('CardsTerms', () => {
  let component: CardsTerms;
  let fixture: ComponentFixture<CardsTerms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsTerms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsTerms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
