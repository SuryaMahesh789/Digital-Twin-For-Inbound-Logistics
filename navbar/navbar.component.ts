import { RouterModule,Router } from '@angular/router';

import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { Component } from '@angular/core';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})


export class NavbarComponent {

  menuValue: boolean = false;
  menu_icon: string = 'bi bi-list';

  static store_id: any;
  static plant_id: any;

  store_id:any;
  plant_id:any;
  store_name!: any;
  plant_name!: any;
  static plant_name: string;
  static store_name: string;
selectedValue: any;

  openMenu() {
    this.menuValue = !this.menuValue;
    this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
  }

  closeMenu() {
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
  }



  Plant_Level_KPI: string ='dashboard';
  Logistics: string ='logistics';
  Store_layout: string ='storelayout';
  Critical_Suppliers: string ='criticalsuppliers';

  
  Plant_Layout: string ='plantlayout';


  //navbar selection with button group

  plant_list: { title: string; link: string }[] = [

    { title: 'Plant 1', link: 'plant1' },
    { title: 'Plant 2', link: 'plant2' },
    { title: 'Plant 3', link: 'plant3' }
  ];


  list = [
    {
      id: 1, name: 'Plant 1', link: 'plant1',
      stores: [
        { id: 101, name: 'P1 Vehicle Stores' },
        { id: 102, name: 'P1 Engine Stores' },
        { id: 103, name: 'P1 Plastic Stores' }
      ]
    },
    {
      id: 2, name: 'Plant 2',
      stores: [
        { id: 201, name: 'P2 Vehicle Stores 1' },
        { id: 202, name: 'P2 Vehicle Stores 2' },
        { id: 203, name: 'P2 CKD Stores 1' },
        { id: 204, name: 'P2 CKD Stores 2' },
        { id: 205, name: 'P2 Frame and Paint Stores' },
        { id: 206, name: 'P2 Engine Stores' }]
    },
    {
      id: 3, name: 'Plant 3',
      stores: [
        { id: 301, name: 'P3 EV Stores' }]
    }
  ];

  selectedStores: any[] = [];

  dropDownForm!: FormGroup;

  constructor(private router: Router) {
    console.log(this.list)

  }

  ngOnInit(): void {

    
    this.dropDownForm = new FormGroup({
      plant: new FormControl(null),
      store: new FormControl(null),

      
    })

    this.dropDownForm.get('plant')?.valueChanges.subscribe((res: number) => {
      console.log(res);
      this.selectedStores = this.list.filter((obj: any) => obj.id === res)[0].stores;
      console.log(this.selectedStores)
    })

    // dropdown menu ts

    this.dropDownForm.valueChanges.subscribe((formValues: { plant: number}) => {
      if (formValues.plant !== null) {
        const selectedPlant = this.list.find(plant => plant.id === formValues.plant);
        if (selectedPlant) {
          const route = `/hosur/plant${selectedPlant.id}`;
          this.router.navigateByUrl(route);
          this.plant_name=selectedPlant.name;
          this.plant_id=selectedPlant.id;

          NavbarComponent.plant_name=selectedPlant.name;
        }
      }
    });
  
    this.dropDownForm.valueChanges.subscribe((formValues: { plant: number, store: number }) => {
      if (formValues.plant !== null && formValues.store !== null) {
        const selectedPlant = this.list.find(plant => plant.id === formValues.plant);
        const selectedStore = selectedPlant?.stores.find(store => store.id === formValues.store);
        if (selectedPlant && selectedStore) {
          const route = `/hosur/plant${selectedPlant.id}/store${selectedStore.id}`;
          this.router.navigateByUrl(route);
          this.store_id=selectedStore.id;
          this.store_name=selectedStore.name;

          NavbarComponent.store_id=selectedStore.id;

          NavbarComponent.store_name=selectedStore.name;
        }
      }
    })
  }


  isHosur()
  {
  return window.location.pathname === '/hosur';
  }

  isPlantLayout()
  {
  return window.location.pathname === '/plantlayout';
  }

  isHome()
  {
  return window.location.pathname === '/'||window.location.pathname === '/home';
  }

  getRoute()
  {
    return window.location.pathname;
  }


}
