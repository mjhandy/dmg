import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejuvenatingDigitalExperience } from './rejuvenating-digital-experience';

describe('RejuvenatingDigitalExperience', () => {
  let component: RejuvenatingDigitalExperience;
  let fixture: ComponentFixture<RejuvenatingDigitalExperience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RejuvenatingDigitalExperience]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejuvenatingDigitalExperience);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
