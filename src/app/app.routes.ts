import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HomeComponent } from './home/home.component';
import { CriticalSuppliersComponent } from './critical-suppliers/critical-suppliers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { PlantLayoutComponent } from './plant-layout/plant-layout.component';


import { PlantComponent } from './plant/plant.component';
import { LoginComponent } from './login/login.component';
import { StoreLayoutComponent } from './store-layout/store-layout.component';
import { StockInStoresComponent } from './stock-in-stores/stock-in-stores.component';

export const routes: Routes = [

    {path:'',component:LoginComponent},

    {path:'home',component:HomeComponent},

    {path:'hosur',component:MainpageComponent},

    {path:'hosur/stock_in_stores',component:StockInStoresComponent},
    

    {path:'hosur/plant',component:PlantComponent},

    {path:'hosur/plant1',component:PlantComponent},
    {path:'hosur/plant2',component:PlantComponent},
    {path:'hosur/plant3',component:PlantComponent},

    {path:'hosur/plant1/dashboard',component:DashboardComponent},
    {path:'hosur/plant1/logistics',component:LogisticsComponent},
    {path:'hosur/plant1/plantlayout',component:PlantLayoutComponent},
    {path:'hosur/plant1/criticalsuppliers',component:CriticalSuppliersComponent},

    {path:'hosur/plant1/stock_in_stores',component:StockInStoresComponent},

    {path:'hosur/plant2/dashboard',component:DashboardComponent},
    {path:'hosur/plant2/logistics',component:LogisticsComponent},
    {path:'hosur/plant2/plantlayout',component:PlantLayoutComponent},
    {path:'hosur/plant2/criticalsuppliers',component:CriticalSuppliersComponent},

    {path:'hosur/plant2/stock_in_stores',component:StockInStoresComponent},

    {path:'hosur/plant3/dashboard',component:DashboardComponent},
    {path:'hosur/plant3/logistics',component:LogisticsComponent},
    {path:'hosur/plant3/plantlayout',component:PlantLayoutComponent},
    {path:'hosur/plant3/criticalsuppliers',component:CriticalSuppliersComponent},

    
    {path:'hosur/plant3/stock_in_stores',component:StockInStoresComponent},

    {path:'hosur/plant1/store101',component:DashboardComponent},
    {path:'hosur/plant1/store102',component:DashboardComponent},
    {path:'hosur/plant1/store103',component:DashboardComponent},

    {path:'hosur/plant1/store101/dashboard',component:DashboardComponent},
    {path:'hosur/plant1/store101/logistics',component:DashboardComponent},
    {path:'hosur/plant1/store101/plantlayout',component:DashboardComponent},
    {path:'hosur/plant1/store101/criticalsuppliers',component:DashboardComponent},

    {path:'hosur/plant1/store102/dashboard',component:DashboardComponent},
    {path:'hosur/plant1/store102/logistics',component:DashboardComponent},
    {path:'hosur/plant1/store102/plantlayout',component:DashboardComponent},
    {path:'hosur/plant1/store102/criticalsuppliers',component:DashboardComponent},

    {path:'hosur/plant1/store103/dashboard',component:DashboardComponent},
    {path:'hosur/plant1/store103/logistics',component:DashboardComponent},
    {path:'hosur/plant1/store103/plantlayout',component:DashboardComponent},
    {path:'hosur/plant1/store103/criticalsuppliers',component:DashboardComponent},


    {path:'hosur/plant2/store201',component:DashboardComponent},
    {path:'hosur/plant2/store202',component:DashboardComponent},
    {path:'hosur/plant2/store203',component:DashboardComponent},
    {path:'hosur/plant2/store204',component:DashboardComponent},
    {path:'hosur/plant2/store205',component:DashboardComponent},
    {path:'hosur/plant2/store206',component:DashboardComponent},

    {path:'hosur/plant3/store301',component:DashboardComponent},


    {path:'dashboard',component:DashboardComponent},
    {path:'logistics',component:LogisticsComponent},
    {path:'storelayout',component:StoreLayoutComponent},
    {path:'criticalsuppliers',component:CriticalSuppliersComponent},

    {path:'plantlayout',component:PlantLayoutComponent},

    // {path:'stock_in_stores',component:StockInStoresComponent},
    

    {path:'**',component:PageNotFoundComponent},

];
