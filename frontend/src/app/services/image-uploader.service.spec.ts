import { TestBed } from '@angular/core/testing';

import { ImageUploaderService } from './image-uploader.service';

describe('ImageUploaderService', () => {
  let service: ImageUploaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageUploaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
