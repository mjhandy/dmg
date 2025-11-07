import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolvingUsability } from './solving-usability';

describe('SolvingUsability', () => {
  let component: SolvingUsability;
  let fixture: ComponentFixture<SolvingUsability>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolvingUsability]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolvingUsability);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
