import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seo } from './seo';

describe('Seo', () => {
  let component: Seo;
  let fixture: ComponentFixture<Seo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
