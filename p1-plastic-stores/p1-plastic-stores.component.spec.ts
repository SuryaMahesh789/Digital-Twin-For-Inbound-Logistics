import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1PlasticStoresComponent } from './p1-plastic-stores.component';

describe('P1PlasticStoresComponent', () => {
  let component: P1PlasticStoresComponent;
  let fixture: ComponentFixture<P1PlasticStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P1PlasticStoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P1PlasticStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
