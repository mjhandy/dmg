import { TestBed } from '@angular/core/testing';

import { SvgIcons } from './svg-icons';

describe('SvgIcons', () => {
  let service: SvgIcons;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgIcons);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
