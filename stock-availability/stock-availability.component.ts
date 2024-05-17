import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-stock-availability',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './stock-availability.component.html',
  styleUrl: './stock-availability.component.css'
})
export class StockAvailabilityComponent {

  items:{partname:string;percent:string}[]=[
      
    { partname:'Frame (N282)',percent:"85%"},
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

}
