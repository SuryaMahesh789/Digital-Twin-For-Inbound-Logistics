import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-trips',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './trips.component.html',
  styleUrl: './trips.component.scss'
})
export class TripsComponent {

  getRuchaTrips(): number[] {
    var data = [];
    for (var i = 0; i < 10; i++) {
        var randomNumber = Math.floor(Math.random() * (50 - 25 + 1)) + 25; // Generate a random number between 25 and 50
        data.push(randomNumber);
    }
    return data;
  }

  getRuchaTotalTrips(): (number | null)[] {
    let sum = 0;
    this.getRuchaTrips().forEach((v) => {
      if(typeof v === 'number')
      {
        sum += v;
      }
    });
    
    return [sum];
}

  getRajsriyaTrips(): number[] {
    var data = [];
    for (var i = 0; i < 10; i++) {
        var randomNumber = Math.floor(Math.random() * (50 - 25 + 1)) + 25; // Generate a random number between 25 and 50
        data.push(randomNumber);
    }
    return data;
  }

  getRajsriyaTotalTrips(): (number | null)[] {
    let sum = 0;
    this.getRajsriyaTrips().forEach((v) => {
      if(typeof v === 'number')
      {
        sum += v;
      }
    });
    
    return [sum];
}

  getMetalmanTrips(): number[] {
    var data = [];
    for (var i = 0; i < 10; i++) {
        var randomNumber = Math.floor(Math.random() * (50 - 25 + 1)) + 25; // Generate a random number between 25 and 50
        data.push(randomNumber);
    }
    return data;
  }

  getMetalmanTotalTrips(): (number | null)[] {
    let sum = 0;
    this.getMetalmanTrips().forEach((v) => {
      if(typeof v === 'number')
      {
        sum += v;
      }
    });
    
    return [sum];
}

  getSandharTrips(): number[] {
    var data = [];
    for (var i = 0; i < 10; i++) {
        var randomNumber = Math.floor(Math.random() * (50 - 25 + 1)) + 25; // Generate a random number between 25 and 50
        data.push(randomNumber);
    }
    return data;
  }

  getSandharTotalTrips(): (number | null)[] {
    let sum = 0;
    this.getSandharTrips().forEach((v) => {
      if(typeof v === 'number')
      {
        sum += v;
      }
    });
    
    return [sum];
}


  getLabels():string[]{
    var labels =[];
    for(var i=1;i<10;i++)
    {
      labels.push(i+'Mar');
    }

    return labels;
  }


  data:ChartData<'line'>={
    labels:this.getLabels(),
    datasets:[
      {
        data:this.getRuchaTrips(),
        label:'Rucha',
        borderColor:'red'
      },
      {
        data:this.getRajsriyaTrips(),
        label:'Rajsriya',
        borderColor:'green'
      },
      {
        data:this.getMetalmanTrips(),
        label:'Metalman',
        borderColor:'blue'
      },
      {
        data:this.getSandharTrips(),
        label:'Sandhar',
        borderColor:'orange'
      }
    ]
  };



}
