import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css'],
})
export class StopwatchComponent implements OnInit {
  private interval: any;
  private time = 0;
  public hh: any = 0;
  public mm: any = 0;
  public ss: any = 0;
  public ms: any = 0;
  public started = false;
  public lap_array: any[] = [];
  public lap_active = false;
  public start_disabled = false;
  public start() {
    this.lap_array = [];
    this.start_disabled = true;
    this.lap_active = true;
    this.interval = setInterval(() => {
      this.started = true;
      this.time += 1;
      let x = this.time;
      this.hh = Math.floor(x / 360000);
      x %= 360000;
      this.mm = Math.floor(x / 6000);
      x %= 6000;
      this.ss = Math.floor(x / 100);
      x %= 100;
      this.ms = x;
    }, 10);
  }
  public stop() {
    clearInterval(this.interval);
    this.started = false;
    this.lap_active = false;
  }
  public reset() {
    clearInterval(this.interval);
    this.hh = 0;
    this.mm = 0;
    this.ss = 0;
    this.ms = 0;
    this.time = 0;
    this.started = false;
    this.start_disabled = false;
    this.lap_active = false;
  }
  public lap() {
    this.lap_array.push({ hh: this.hh, mm: this.mm, ss: this.ss, ms: this.ms });
  }
  ngOnInit(): void {}
}
