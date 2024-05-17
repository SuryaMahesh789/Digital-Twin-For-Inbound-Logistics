import { Component } from '@angular/core';
import { TrolleyAvailabilityComponent } from '../trolley-availability/trolley-availability.component';
import { P2FrameAndPaintStoresComponent } from '../p2-frame-and-paint-stores/p2-frame-and-paint-stores.component';
import { P2CkdStoresComponent } from '../p2-ckd-stores/p2-ckd-stores.component';
import { P1EngineStoresComponent } from '../p1-engine-stores/p1-engine-stores.component';
import { P2VehicleStoresComponent } from '../p2-vehicle-stores/p2-vehicle-stores.component';
import { P1VehicleStoresComponent } from '../p1-vehicle-stores/p1-vehicle-stores.component';
import { SecurityComponent } from '../security/security.component';
import { P2VehicleAndEngineStoresComponent } from "../p2-vehicle-and-engine-stores/p2-vehicle-and-engine-stores.component";
import { P1PlasticStoresComponent } from "../p1-plastic-stores/p1-plastic-stores.component";
import { P3StoresComponent } from "../p3-stores/p3-stores.component";


@Component({
    selector: 'app-plant-layout',
    standalone: true,
    templateUrl: './plant-layout.component.html',
    styleUrl: './plant-layout.component.scss',
    imports: [TrolleyAvailabilityComponent, P2FrameAndPaintStoresComponent, P2CkdStoresComponent, P1EngineStoresComponent, P2VehicleStoresComponent, P1VehicleStoresComponent, SecurityComponent, P2VehicleAndEngineStoresComponent, P1PlasticStoresComponent, P3StoresComponent]
})
export class PlantLayoutComponent {
  arr = new Array(378);
}
