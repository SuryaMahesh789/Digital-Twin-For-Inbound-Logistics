import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2CkdStoresComponent } from './p2-ckd-stores.component';

describe('P2CkdStoresComponent', () => {
  let component: P2CkdStoresComponent;
  let fixture: ComponentFixture<P2CkdStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P2CkdStoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P2CkdStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
