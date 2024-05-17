import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2StoreLayoutComponent } from './p2-store-layout.component';

describe('P2StoreLayoutComponent', () => {
  let component: P2StoreLayoutComponent;
  let fixture: ComponentFixture<P2StoreLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P2StoreLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P2StoreLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
