import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMap } from './site-map';

describe('SiteMap', () => {
  let component: SiteMap;
  let fixture: ComponentFixture<SiteMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
