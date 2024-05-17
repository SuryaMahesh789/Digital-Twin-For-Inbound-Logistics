import { Component } from '@angular/core';
import { P2VehicleStores2Component } from "../p2-vehicle-stores2/p2-vehicle-stores2.component";
import { P2EngineStoresComponent } from "../p2-engine-stores/p2-engine-stores.component";

@Component({
    selector: 'app-p2-vehicle-and-engine-stores',
    standalone: true,
    templateUrl: './p2-vehicle-and-engine-stores.component.html',
    styleUrl: './p2-vehicle-and-engine-stores.component.scss',
    imports: [P2VehicleStores2Component, P2EngineStoresComponent]
})


export class P2VehicleAndEngineStoresComponent {

}
