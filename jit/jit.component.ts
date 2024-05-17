import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-jit',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './jit.component.html',
  styleUrl: './jit.component.scss'
})

export class JitComponent {

  getJitData(): (number | [number, number] | null)[] {
    return [121,10,70,45];
  }


data:ChartData<'pie'>={
  labels:['GRN Completed','Delayed','Ongoing','Not Processed'],
    datasets:[
      {
        data:[121,10,70,45],
        label:'Actual Time in Hrs',
        backgroundColor:['Green','Red','Yellow','Blue'],
        borderWidth:0,
      }
    ],
}
  

}
