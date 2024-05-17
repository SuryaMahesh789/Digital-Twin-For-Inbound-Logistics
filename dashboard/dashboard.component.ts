import { Component } from '@angular/core';
import { JitComponent } from '../jit/jit.component';
import { KpiComponent } from '../kpi/kpi.component';
import { StockAvailabilityComponent } from '../stock-availability/stock-availability.component';
import { OnTimeDeliveryComponent } from '../on-time-delivery/on-time-delivery.component';
import { NavbarComponent } from "../navbar/navbar.component";


@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [JitComponent, KpiComponent, StockAvailabilityComponent, OnTimeDeliveryComponent, NavbarComponent]
})
export class DashboardComponent {

}
