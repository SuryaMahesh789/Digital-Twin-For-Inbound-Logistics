
import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { NavbarComponent } from "../navbar/navbar.component";
import { P1StoreLayoutComponent } from "../p1-store-layout/p1-store-layout.component";
import { P2StoreLayoutComponent } from "../p2-store-layout/p2-store-layout.component";
import { P3StoreLayoutComponent } from "../p3-store-layout/p3-store-layout.component";

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {  FormsModule } from '@angular/forms';



@Component({
    selector: 'app-plant',
    standalone: true,
    templateUrl: './plant.component.html',
    styleUrl: './plant.component.css',
    imports: [BaseChartDirective ,RouterModule, NavbarComponent, P1StoreLayoutComponent, P2StoreLayoutComponent, P3StoreLayoutComponent, CommonModule, FormsModule]
})

export class PlantComponent
{

// jit section ts 
        getJitData(): (number | [number, number] | null)[] {
            return [121,10,70,45];
          }


        data1:ChartData<'pie'>={
          labels:['GRN Completed','Ongoing','Not Processed'],
            datasets:[
              {
                data:[121,70,45],
                label:'Actual Time in Hrs',
                backgroundColor:['Green', 'Yellow','Blue'],
                borderWidth:0,
              }
            ],
        }

    // kpi section ts  

  
      getActual(): (number | [number, number] | null)[] {
        return [18,5,12,6,9]
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
    

      
      data2:ChartData<'bar'>={
        labels:['ATAT','Unloading Time','Lead Time','Dock To Dock Time'],
        datasets:[
          {
            data:this.getActual(),
            label:'Actual Time in Hrs',
            backgroundColor:['Green','Red','Yellow','Blue'],
          },
        ],
        };


      // stock section  ts

      stock_in_stores: string ='stock_in_stores';


      items:{partname:string;percent:string}[]=[
      
        { partname:'Frame (N282)',percent:"10%"},
        { partname:'Toggle Link (N282)',percent:"55%"},
        { partname:'Handle Bar (N282)',percent:"75%"},
        { partname:'Handle Bar (ELECTRIC)',percent:"85%"},
        { partname:'Jupiter Fender',percent:"55%"},
        { partname:'Bag Hook',percent:"75%"},
        { partname:'Crash Guard',percent:"85%"},
        { partname:'Tank Guard RH',percent:"55%"},
        { partname:'Centre Stand Star HLX',percent:"75%"},
        { partname:'KIT ACCESSORIES',percent:"75%"},
        { partname:'License Plate',percent:"75%"},
        { partname:'Pipe Air Injection',percent:"75%"},
        { partname:'Saree Guard',percent:"75%"},
        { partname:'Frame (N282)',percent:"85%"},
        { partname:'Toggle Link (N282)',percent:"55%"},
        { partname:'Handle Bar (N282)',percent:"75%"},
        { partname:'Handle Bar (ELECTRIC)',percent:"85%"},
        { partname:'Jupiter Fender',percent:"55%"},
        { partname:'Bag Hook',percent:"75%"},
        { partname:'Crash Guard',percent:"85%"},
        { partname:'Tank Guard RH',percent:"55%"},
        { partname:'Centre Stand Star HLX',percent:"75%"},
      ];


      // ontime delivery ts 

      getData(): (number | [number, number] | null)[] {
        return [80,20];
      }
    
    
    
      data3:ChartData<'doughnut'>={
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



  // critical supplier`s ts 

      // atat section ts 

          getActualAtat(): (number | [number, number] | null)[] {
            return [8,5,10,5,3]
          }

          getExpectedAtat(): (number | [number, number] | null)[] {
            return [5,3,7,3,1]
          }

          getTotalActualATAT(): (number | null)[] {
            let sum = 0;
            this.getActualAtat().forEach((v) => {
              if(typeof v === 'number')
              {
                sum += v;
              }
            });
            
            return [sum];
        }

        getTotalExpectedATAT(): (number | null)[] {
          let sum = 0;
          this.getExpectedAtat().forEach((v) => {
            if(typeof v === 'number')
            {
              sum += v;
            }
          });
          
          return [sum];
        } 

          data4:ChartData<'bar'>={
            labels:['Rucha','Rajsriya','Metalman','Sandhar'],
            datasets:[
              {
                data:this.getActualAtat(),
                label:'Actual Time in Hrs',
                backgroundColor:['Red']
              },
              {
                data:this.getExpectedAtat(),
                label:'Expected Time in Hrs',
                backgroundColor:['Green'],
              }
            ] 
          };



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
        
        
          data5:ChartData<'line'>={
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
        


      // truck fleet status ts 

      data6:ChartData<'doughnut'>={
        labels: ['Idle','Active','Delivered'],
        datasets: [
          {
            data:[20,30,10],
            label:'Rucha',
            borderWidth:0,
            backgroundColor:['blue','orange','brown']
          }
        ],
      }
      
      data7:ChartData<'doughnut'>={
        labels: ['Idle','Active','Delivered'],
        datasets: [
          {
            data:[19,13,8],
            label:'Rajsriya',
            borderWidth:0,
            backgroundColor:['blue','orange','brown']
          }
        ]
      }
      
      data8:ChartData<'doughnut'>={
        labels: ['Idle','Active','Delivered'],
        datasets: [
          {
            data:[15,22,18],
            label:'Metalman',
            borderWidth:0,
            backgroundColor:['blue','orange','brown']
          }
        ]
      }
      
      
      data9:ChartData<'doughnut'>={
        labels: ['Idle','Active','Delivered'],
        datasets: [
          {
            data:[15,23,5],
            label:'Sandhar',
            borderWidth:0,
            backgroundColor:['blue','orange','brown']
          }
        ]
      }



      //LOGISTICS SECTION TS

      delivered: number = 10;
      intransit: number = 15;


      getstore(): "/hosur/plant1" | "/hosur/plant2" | "/hosur/plant3" | '/hosur/plant1'
      {

        if(window.location.pathname === '/hosur/plant1')
        {
          return '/hosur/plant1';
        }
        else if(window.location.pathname === '/hosur/plant2')
        {
          return '/hosur/plant2';
        }
        else if(window.location.pathname === '/hosur/plant3')
        {
          return '/hosur/plant3';
        }

        return '/hosur/plant1';
      }

}

