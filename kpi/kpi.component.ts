import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-kpi',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './kpi.component.html',
  styleUrl: './kpi.component.scss'
})


export class KpiComponent {
  
  getActual(): (number | [number, number] | null)[] {
    return [8,5,10,5,3]
  }

  getExpected(): (number | [number, number] | null)[] {
    return [5,3,7,3,1]
  }

  getTotalActualTAT(): (number | null)[] {
    let sum = 0;
    this.getActual().forEach((v) => {
      if(typeof v === 'number')
      {
        sum += v;
      }
    });
    
    return [sum];
}

getTotalExpectedTAT(): (number | null)[] {
  let sum = 0;
  this.getExpected().forEach((v) => {
    if(typeof v === 'number')
    {
      sum += v;
    }
  });
  
  return [sum];
} 

  
  data:ChartData<'bar'>={
    labels:['Loading Time','Unloading Time','Lead Time','Waiting Time','Idle Time'],
    datasets:[
      {
        data:this.getActual(),
        label:'Actual Time in Hrs',
        backgroundColor:['blue']
      },
      {
        data:this.getExpected(),
        label:'Expected Time in Hrs',
        backgroundColor:['orange']
      },
    ],
    };
}



// manually not from backend - data:[10,5,3,1]