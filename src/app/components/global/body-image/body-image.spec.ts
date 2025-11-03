import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyImage } from './body-image';

describe('BodyImage', () => {
  let component: BodyImage;
  let fixture: ComponentFixture<BodyImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
