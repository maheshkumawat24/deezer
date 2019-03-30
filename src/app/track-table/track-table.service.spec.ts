import { TestBed, inject } from '@angular/core/testing';

import { TrackTableService } from './track-table.service';

describe('TrackTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackTableService]
    });
  });

  it('should be created', inject([TrackTableService], (service: TrackTableService) => {
    expect(service).toBeTruthy();
  }));
});
