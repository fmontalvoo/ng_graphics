import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgChartsModule } from 'ng2-charts';

import { LineChartComponent } from './components/line-chart/line-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
  ],
  declarations: [
    AppComponent,
    LineChartComponent,
    BarChartComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
