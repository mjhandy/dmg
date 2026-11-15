import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ContactUs } from './contact-us';

describe('ContactUs', () => {
  let component: ContactUs;
  let fixture: ComponentFixture<ContactUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUs],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
