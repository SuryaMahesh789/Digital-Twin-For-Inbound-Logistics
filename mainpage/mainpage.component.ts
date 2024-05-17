import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { PlantLayoutComponent } from "../plant-layout/plant-layout.component";
import { PlantComponent } from "../plant/plant.component";

@Component({
    selector: 'app-mainpage',
    standalone: true,
    templateUrl: './mainpage.component.html',
    styleUrl: './mainpage.component.css',
    imports: [RouterOutlet, NavbarComponent, HomeComponent, PlantLayoutComponent, PlantComponent]
})

export class MainpageComponent {

}
