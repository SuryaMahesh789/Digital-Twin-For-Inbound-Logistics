import { Component } from '@angular/core';
import { KpiComponent } from '../kpi/kpi.component';
import { AtatComponent } from '../atat/atat.component';
import { TripsComponent } from '../trips/trips.component';
import { TruckFleetStatusComponent } from '../truck-fleet-status/truck-fleet-status.component';

@Component({
  selector: 'app-critical-suppliers',
  standalone: true,
  imports: [AtatComponent,TripsComponent,KpiComponent,TruckFleetStatusComponent],
  templateUrl: './critical-suppliers.component.html',
  styleUrl: './critical-suppliers.component.scss'
})

export class CriticalSuppliersComponent
{

}
