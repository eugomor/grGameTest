import { TestBed, inject } from '@angular/core/testing';

import { SelectedBallService } from './selected-ball.service';

describe('SelectedBallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedBallService]
    });
  });

  it('should be created', inject([SelectedBallService], (service: SelectedBallService) => {
    expect(service).toBeTruthy();
  }));
});
