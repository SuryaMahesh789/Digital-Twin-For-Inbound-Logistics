import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2VehicleAndEngineStoresComponent } from './p2-vehicle-and-engine-stores.component';

describe('P2VehicleAndEngineStoresComponent', () => {
  let component: P2VehicleAndEngineStoresComponent;
  let fixture: ComponentFixture<P2VehicleAndEngineStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P2VehicleAndEngineStoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P2VehicleAndEngineStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
