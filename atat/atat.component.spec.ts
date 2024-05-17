import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtatComponent } from './atat.component';

describe('AtatComponent', () => {
  let component: AtatComponent;
  let fixture: ComponentFixture<AtatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
