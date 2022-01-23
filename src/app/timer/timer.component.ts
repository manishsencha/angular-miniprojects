import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, OnDestroy {
  public hh: any = 0;
  public mm: any = 0;
  public ss: any = 0;
  private interval: any;
  private totaltime: any = 0;
  public started = false;
  public setNewHour(event: any) {
    this.hh = event.target.value;
  }
  public setNewMinute(event: any) {
    this.mm = event.target.value;
  }
  public setNewSecond(event: any) {
    this.ss = event.target.value;
  }
  public startTimer() {
    this.totaltime = this.hh * 3600 + this.mm * 60 + this.ss;
    this.started = true;
    this.interval = setInterval(() => {
      if (this.totaltime > 0) {
        this.totaltime--;
        let x = this.totaltime;
        this.hh = Math.floor(x / 3600);
        x %= 3600;
        this.mm = Math.floor(x / 60);
        this.ss = x % 60;
      } else {
        this.pauseTimer();
      }
    },1000);
  }
  public pauseTimer() {
    clearInterval(this.interval);
    this.started = false;
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
