import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
import { valueOrDefault } from 'chart.js/dist/helpers/helpers.core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-on-time-delivery',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './on-time-delivery.component.html',
  styleUrl: './on-time-delivery.component.css'
})
export class OnTimeDeliveryComponent {

  getData(): (number | [number, number] | null)[] {
    return [80,20];
  }



  data1:ChartData<'doughnut'>={
    labels: ['On Time', 'Delayed'],
    datasets: [
      {
        data:[90,20],
        label:'Rucha',
        // borderWidth:0,
        backgroundColor:['green','red']
      }
    ],
  }
}

