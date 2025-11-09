import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCasestudies } from './cards-casestudies';

describe('CardsCasestudies', () => {
  let component: CardsCasestudies;
  let fixture: ComponentFixture<CardsCasestudies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsCasestudies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsCasestudies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
