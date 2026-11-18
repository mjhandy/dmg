import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToTop } from './back-to-top';

describe('BackToTop', () => {
  let fixture: ComponentFixture<BackToTop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackToTop]
    }).compileComponents();

    fixture = TestBed.createComponent(BackToTop);
    fixture.detectChanges();
  });

  it('scrolls to the top and returns focus to the body', () => {
    const focus = spyOn(document.body, 'focus');
    const scrollTo = spyOn(window, 'scrollTo').and.stub();

    fixture.nativeElement.querySelector('button').click();

    expect(scrollTo.calls.mostRecent().args[0]).toEqual({ top: 0, behavior: 'smooth' });
    expect(focus).toHaveBeenCalledWith({ preventScroll: true });
  });
});
