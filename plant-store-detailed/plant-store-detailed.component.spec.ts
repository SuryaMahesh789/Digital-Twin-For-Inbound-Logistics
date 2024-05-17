import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantStoreDetailedComponent } from './plant-store-detailed.component';

describe('PlantStoreDetailedComponent', () => {
  let component: PlantStoreDetailedComponent;
  let fixture: ComponentFixture<PlantStoreDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantStoreDetailedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantStoreDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
