import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsServices } from './cards-services';

describe('CardsServices', () => {
  let component: CardsServices;
  let fixture: ComponentFixture<CardsServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
