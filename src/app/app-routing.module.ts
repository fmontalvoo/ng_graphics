import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LineChartComponent } from './components/line-chart/line-chart.component';

const routes: Routes = [
  { path: 'line', component: LineChartComponent },
  // { path: '', },
  { path: '**', redirectTo: 'line', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
