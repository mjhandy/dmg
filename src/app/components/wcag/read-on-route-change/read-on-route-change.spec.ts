import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnRouteChange } from './read-on-route-change';

describe('ReadOnRouteChange', () => {
  let component: ReadOnRouteChange;
  let fixture: ComponentFixture<ReadOnRouteChange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadOnRouteChange]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadOnRouteChange);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
