import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';

const routes: Routes = [
  { path: 'line', component: LineChartComponent },
  { path: 'bar', component: BarChartComponent },
  // { path: '', },
  { path: '**', redirectTo: 'line', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
