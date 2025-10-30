import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipToMain } from './skip-to-main';

describe('SkipToMain', () => {
  let component: SkipToMain;
  let fixture: ComponentFixture<SkipToMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkipToMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkipToMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
