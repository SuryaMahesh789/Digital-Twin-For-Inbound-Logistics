import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnTimeDeliveryComponent } from './on-time-delivery.component';

describe('OnTimeDeliveryComponent', () => {
  let component: OnTimeDeliveryComponent;
  let fixture: ComponentFixture<OnTimeDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnTimeDeliveryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnTimeDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
