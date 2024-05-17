import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrolleyAvailabilityComponent } from './trolley-availability.component';

describe('TrolleyAvailabilityComponent', () => {
  let component: TrolleyAvailabilityComponent;
  let fixture: ComponentFixture<TrolleyAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrolleyAvailabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrolleyAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
