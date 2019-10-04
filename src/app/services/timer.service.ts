import { Injectable } from '@angular/core';

import { Observable, timer, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Status } from '../enums/status.enum';

const SWITCH_STATUS = 5;

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  public getStatus(): Observable<Status> {
    return timer(1000, 1000).pipe(
      switchMap((time: number) => {
        if (time < SWITCH_STATUS) {
          return of(Status.Valid);
        }
        return of(Status.InValid);
      })
    );
  }
}
