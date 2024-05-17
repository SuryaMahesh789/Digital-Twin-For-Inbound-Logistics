

import { Component } from '@angular/core';

@Component({
  selector: 'app-logistics',
  standalone: true,
  imports: [],
  templateUrl: './logistics.component.html',
  styleUrl: './logistics.component.css'
})
export class LogisticsComponent {
  delivered: number = 10;
  intransit: number = 15;
}

