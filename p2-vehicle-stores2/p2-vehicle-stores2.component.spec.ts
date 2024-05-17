import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2VehicleStores2Component } from './p2-vehicle-stores2.component';

describe('P2VehicleStores2Component', () => {
  let component: P2VehicleStores2Component;
  let fixture: ComponentFixture<P2VehicleStores2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P2VehicleStores2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P2VehicleStores2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
