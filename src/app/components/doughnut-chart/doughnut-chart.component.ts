import { Component, ViewChild } from '@angular/core';

import { ChartData, ChartEvent, ChartType } from 'chart.js';

import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent {

  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100] },
      { data: [50, 150, 120] },
      { data: [250, 130, 70] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    for (let i = 0; i < this.doughnutChartData.datasets.length; i++) {
      for (let j = 0; j < this.doughnutChartData.datasets[i].data.length; j++) {
        this.doughnutChartData.datasets[i].data[j] = DoughnutChartComponent.generateNumber(i);
      }
    }
    this.chart?.update();
  }

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

}
