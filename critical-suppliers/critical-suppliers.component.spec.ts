import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalSuppliersComponent } from './critical-suppliers.component';

describe('CriticalSuppliersComponent', () => {
  let component: CriticalSuppliersComponent;
  let fixture: ComponentFixture<CriticalSuppliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriticalSuppliersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriticalSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
