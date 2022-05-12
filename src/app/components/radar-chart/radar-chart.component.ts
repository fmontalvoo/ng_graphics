import { Component, ViewChild } from '@angular/core';

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent {

  // Radar
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = ['Comer', 'Beber', 'Dormir', 'Diseñar', 'Codificar', 'Montar en bicicleta', 'Correr'];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [65, 59, 90, 81, 56, 55, 40], label: 'Serie A' },
      { data: [28, 48, 40, 19, 96, 27, 100], label: 'Serie B' }
    ]
  };
  public radarChartType: ChartType = 'radar';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    for (let i = 0; i < this.radarChartData.datasets.length; i++) {
      for (let j = 0; j < this.radarChartData.datasets[i].data.length; j++) {
        this.radarChartData.datasets[i].data[j] = RadarChartComponent.generateNumber(i);
      }
    }
    this.chart?.update();
  }

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

}
