import { Component } from '@angular/core';
import { P2FrameAndPaintStoresComponent } from '../p2-frame-and-paint-stores/p2-frame-and-paint-stores.component';
import { P2CkdStoresComponent } from '../p2-ckd-stores/p2-ckd-stores.component';
import { P1EngineStoresComponent } from '../p1-engine-stores/p1-engine-stores.component';
import { P2VehicleStoresComponent } from '../p2-vehicle-stores/p2-vehicle-stores.component';
import { P1VehicleStoresComponent } from '../p1-vehicle-stores/p1-vehicle-stores.component';
import { P2VehicleAndEngineStoresComponent } from "../p2-vehicle-and-engine-stores/p2-vehicle-and-engine-stores.component";
import { P1PlasticStoresComponent } from "../p1-plastic-stores/p1-plastic-stores.component";
import { P3StoresComponent } from "../p3-stores/p3-stores.component";
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../navbar/navbar.component';
 
@Component({
  selector: 'app-store-layout',
  standalone: true,
  imports: [CommonModule, P2FrameAndPaintStoresComponent, P2CkdStoresComponent, P1EngineStoresComponent, P2VehicleStoresComponent, P1VehicleStoresComponent, P2VehicleAndEngineStoresComponent, P1PlasticStoresComponent, P3StoresComponent, NavbarComponent],
  templateUrl: './store-layout.component.html',
  styleUrl: './store-layout.component.css'
})
export class StoreLayoutComponent {

  selected_store=NavbarComponent.store_id

  selected_plant_name=NavbarComponent.plant_name;
  selected_store_name=NavbarComponent.store_name;
 
  constructor(){
    console.log(this.selected_store)
  }

  items:{dock:string;vehicle_no:string;supplier_name:string;vehicle_entry_no:string;dock_entry_time:string;duration_at_dock:string}[]=[

    { dock:'2D01',vehicle_no:"TN66AM5559",supplier_name:"Unique Shell Mould (India)",vehicle_entry_no:"5866114",dock_entry_time:"21 March 2024 04:15:31 PM",duration_at_dock:"0 Days 0 Hour 19 Min"},
    { dock:'2D01',vehicle_no:"TN66AM5559",supplier_name:"Unique Shell Mould (India)",vehicle_entry_no:"5866114",dock_entry_time:"21 March 2024 04:15:31 PM",duration_at_dock:"0 Days 0 Hour 19 Min"},
    { dock:'2D01',vehicle_no:"TN66AM5559",supplier_name:"Unique Shell Mould (India)",vehicle_entry_no:"5866114",dock_entry_time:"21 March 2024 04:15:31 PM",duration_at_dock:"0 Days 0 Hour 19 Min"},
    { dock:'2D01',vehicle_no:"TN66AM5559",supplier_name:"Unique Shell Mould (India)",vehicle_entry_no:"5866114",dock_entry_time:"21 March 2024 04:15:31 PM",duration_at_dock:"0 Days 0 Hour 19 Min"},
    { dock:'2D01',vehicle_no:"TN66AM5559",supplier_name:"Unique Shell Mould (India)",vehicle_entry_no:"5866114",dock_entry_time:"21 March 2024 04:15:31 PM",duration_at_dock:"0 Days 0 Hour 19 Min"},
    { dock:'2D01',vehicle_no:"TN66AM5559",supplier_name:"Unique Shell Mould (India)",vehicle_entry_no:"5866114",dock_entry_time:"21 March 2024 04:15:31 PM",duration_at_dock:"0 Days 0 Hour 19 Min"},
    { dock:'2D01',vehicle_no:"TN66AM5559",supplier_name:"Unique Shell Mould (India)",vehicle_entry_no:"5866114",dock_entry_time:"21 March 2024 04:15:31 PM",duration_at_dock:"0 Days 0 Hour 19 Min"},
    { dock:'2D01',vehicle_no:"TN66AM5559",supplier_name:"Unique Shell Mould (India)",vehicle_entry_no:"5866114",dock_entry_time:"21 March 2024 04:15:31 PM",duration_at_dock:"0 Days 0 Hour 19 Min"},
    { dock:'2D01',vehicle_no:"TN66AM5559",supplier_name:"Unique Shell Mould (India)",vehicle_entry_no:"5866114",dock_entry_time:"21 March 2024 04:15:31 PM",duration_at_dock:"0 Days 0 Hour 19 Min"},
    { dock:'2D01',vehicle_no:"TN66AM5559",supplier_name:"Unique Shell Mould (India)",vehicle_entry_no:"5866114",dock_entry_time:"21 March 2024 04:15:31 PM",duration_at_dock:"0 Days 0 Hour 19 Min"},
    { dock:'2D01',vehicle_no:"TN66AM5559",supplier_name:"Unique Shell Mould (India)",vehicle_entry_no:"5866114",dock_entry_time:"21 March 2024 04:15:31 PM",duration_at_dock:"0 Days 0 Hour 19 Min"},
    { dock:'2D01',vehicle_no:"TN66AM5559",supplier_name:"Unique Shell Mould (India)",vehicle_entry_no:"5866114",dock_entry_time:"21 March 2024 04:15:31 PM",duration_at_dock:"0 Days 0 Hour 19 Min"},
    { dock:'2D01',vehicle_no:"TN66AM5559",supplier_name:"Unique Shell Mould (India)",vehicle_entry_no:"5866114",dock_entry_time:"21 March 2024 04:15:31 PM",duration_at_dock:"0 Days 0 Hour 19 Min"},
    
  ];
}