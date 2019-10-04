import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TimerService } from './timer.service';
import { Status } from '../enums/status.enum';

import { Subscription } from 'rxjs';

describe('TimerService', () => {
  let service: TimerService;
  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.get(TimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getStaus', () => {
    it('should return an Observable of Status', fakeAsync(() => {
      let status: Status;

      const subscription = service.getStatus()
        .subscribe((value: Status) => {
          status = value;
        });

      tick(1000);
      expect(status).toEqual(Status.Valid);

      tick(5000);
      expect(status).toEqual(Status.InValid);

      subscription.unsubscribe();
    }));
  });
});
