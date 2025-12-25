import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingorderpageComponent } from './trackingorderpage.component';

describe('TrackingorderpageComponent', () => {
  let component: TrackingorderpageComponent;
  let fixture: ComponentFixture<TrackingorderpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackingorderpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackingorderpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
