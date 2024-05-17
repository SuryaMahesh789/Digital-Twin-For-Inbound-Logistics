import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1VehicleStoresComponent } from './p1-vehicle-stores.component';

describe('P1VehicleStoresComponent', () => {
  let component: P1VehicleStoresComponent;
  let fixture: ComponentFixture<P1VehicleStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P1VehicleStoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P1VehicleStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
