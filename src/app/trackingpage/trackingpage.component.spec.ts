import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingpageComponent } from './trackingpage.component';

describe('TrackingpageComponent', () => {
  let component: TrackingpageComponent;
  let fixture: ComponentFixture<TrackingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackingpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
