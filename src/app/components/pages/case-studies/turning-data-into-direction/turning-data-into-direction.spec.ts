import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurningDataIntoDirection } from './turning-data-into-direction';

describe('TurningDataIntoDirection', () => {
  let component: TurningDataIntoDirection;
  let fixture: ComponentFixture<TurningDataIntoDirection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurningDataIntoDirection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurningDataIntoDirection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
