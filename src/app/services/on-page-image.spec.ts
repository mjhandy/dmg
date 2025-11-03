import { TestBed } from '@angular/core/testing';

import { OnPageImage } from './on-page-image';

describe('OnPageImage', () => {
  let service: OnPageImage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnPageImage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
