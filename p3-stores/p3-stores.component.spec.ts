import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3StoresComponent } from './p3-stores.component';

describe('P3StoresComponent', () => {
  let component: P3StoresComponent;
  let fixture: ComponentFixture<P3StoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P3StoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P3StoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
