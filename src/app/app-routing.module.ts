import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { TimerComponent } from './timer/timer.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'timer', component: TimerComponent },
  {
    path: 'stopwatch',
    component: StopwatchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
