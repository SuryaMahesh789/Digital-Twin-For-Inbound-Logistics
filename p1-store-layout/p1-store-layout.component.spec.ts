import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1StoreLayoutComponent } from './p1-store-layout.component';

describe('P1StoreLayoutComponent', () => {
  let component: P1StoreLayoutComponent;
  let fixture: ComponentFixture<P1StoreLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P1StoreLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P1StoreLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
