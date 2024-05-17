import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2VehicleStoresComponent } from './p2-vehicle-stores.component';

describe('P2VehicleStoresComponent', () => {
  let component: P2VehicleStoresComponent;
  let fixture: ComponentFixture<P2VehicleStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P2VehicleStoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P2VehicleStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
