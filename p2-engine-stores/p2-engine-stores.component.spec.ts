import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2EngineStoresComponent } from './p2-engine-stores.component';

describe('P2EngineStoresComponent', () => {
  let component: P2EngineStoresComponent;
  let fixture: ComponentFixture<P2EngineStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P2EngineStoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P2EngineStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
