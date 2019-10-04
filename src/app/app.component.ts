import { Component, OnInit } from '@angular/core';
import { TimerService } from './services/timer.service';
import { Status } from './enums/status.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'timer';
  public status: Status;
  private timer$: Subscription;

  constructor(private timerService: TimerService) {}

  public ngOnInit(): void {
    this.timer$ = this.timerService.getStatus().subscribe((status: Status) => {
      this.status = status;

      if(status === Status.InValid) {
        this.timer$.unsubscribe();
      }
    });
  }
}
