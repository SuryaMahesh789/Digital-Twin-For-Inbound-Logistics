import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';



@Component({
  selector: 'app-truck-fleet-status',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './truck-fleet-status.component.html',
  styleUrl: './truck-fleet-status.component.scss'
})

export class TruckFleetStatusComponent {
data1:ChartData<'doughnut'>={
  labels: ['Delivered', 'Idle', 'Ready For Shipment'],
  datasets: [
    {
      data:[20,30,10],
      label:'Rucha',
      borderWidth:0,
      backgroundColor:['blue','orange','brown']
    }
  ],
}

data2:ChartData<'doughnut'>={
  labels: ['Delivered', 'Idle', 'Ready For Shipment'],
  datasets: [
    {
      data:[19,13,8],
      label:'Rajsriya',
      borderWidth:0,
      backgroundColor:['blue','orange','brown']
    }
  ]
}

data3:ChartData<'doughnut'>={
  labels: ['Delivered', 'Idle', 'Ready For Shipment'],
  datasets: [
    {
      data:[15,22,18],
      label:'Metalman',
      borderWidth:0,
      backgroundColor:['blue','orange','brown']
    }
  ]
}


data4:ChartData<'doughnut'>={
  labels: ['Delivered', 'Idle', 'Ready For Shipment'],
  datasets: [
    {
      data:[15,23,5],
      label:'Sandhar',
      borderWidth:0,
      backgroundColor:['blue','orange','brown']
    }
  ]
}




}

