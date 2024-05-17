import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3StoreLayoutComponent } from './p3-store-layout.component';

describe('P3StoreLayoutComponent', () => {
  let component: P3StoreLayoutComponent;
  let fixture: ComponentFixture<P3StoreLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P3StoreLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P3StoreLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
