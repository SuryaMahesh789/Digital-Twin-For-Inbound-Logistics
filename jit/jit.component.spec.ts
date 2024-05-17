import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JitComponent } from './jit.component';

describe('JitComponent', () => {
  let component: JitComponent;
  let fixture: ComponentFixture<JitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
