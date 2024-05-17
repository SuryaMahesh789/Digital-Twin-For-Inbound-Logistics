import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockInStoresComponent } from './stock-in-stores.component';

describe('StockInStoresComponent', () => {
  let component: StockInStoresComponent;
  let fixture: ComponentFixture<StockInStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockInStoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockInStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
