import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckFleetStatusComponent } from './truck-fleet-status.component';

describe('TruckFleetStatusComponent', () => {
  let component: TruckFleetStatusComponent;
  let fixture: ComponentFixture<TruckFleetStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruckFleetStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TruckFleetStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
