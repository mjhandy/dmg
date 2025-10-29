import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudies } from './case-studies';

describe('CaseStudies', () => {
  let component: CaseStudies;
  let fixture: ComponentFixture<CaseStudies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStudies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStudies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
