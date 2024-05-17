import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2FrameAndPaintStoresComponent } from './p2-frame-and-paint-stores.component';

describe('P2FrameAndPaintStoresComponent', () => {
  let component: P2FrameAndPaintStoresComponent;
  let fixture: ComponentFixture<P2FrameAndPaintStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P2FrameAndPaintStoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P2FrameAndPaintStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
