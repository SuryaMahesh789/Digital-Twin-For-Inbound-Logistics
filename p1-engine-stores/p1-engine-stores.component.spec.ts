import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1EngineStoresComponent } from './p1-engine-stores.component';

describe('P1EngineStoresComponent', () => {
  let component: P1EngineStoresComponent;
  let fixture: ComponentFixture<P1EngineStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P1EngineStoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P1EngineStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
