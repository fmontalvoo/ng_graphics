import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';

const routes: Routes = [
  { path: 'bar', component: BarChartComponent },
  { path: 'line', component: LineChartComponent },
  { path: 'radar', component: RadarChartComponent },
  { path: 'doughnut', component: DoughnutChartComponent },
  { path: '**', redirectTo: 'line', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
