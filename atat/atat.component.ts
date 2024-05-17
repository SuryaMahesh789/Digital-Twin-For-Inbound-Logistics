import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-atat',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './atat.component.html',
  styleUrl: './atat.component.scss'
})


export class AtatComponent {
  getActual(): (number | [number, number] | null)[] {
    return [8,5,10,5,3]
  }

  getExpected(): (number | [number, number] | null)[] {
    return [5,3,7,3,1]
  }

  getTotalActualATAT(): (number | null)[] {
    let sum = 0;
    this.getActual().forEach((v) => {
      if(typeof v === 'number')
      {
        sum += v;
      }
    });
    
    return [sum];
}

getTotalExpectedATAT(): (number | null)[] {
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
    labels:['Rucha','Rajsriya','Metalman','Sandhar'],
    datasets:[
      {
        data:this.getActual(),
        label:'Actual Time in Hrs',
        backgroundColor:['Red']
      },
      {
        data:this.getExpected(),
        label:'Expected Time in Hrs',
        backgroundColor:['Green'],
      }
    ] 
  };

}
