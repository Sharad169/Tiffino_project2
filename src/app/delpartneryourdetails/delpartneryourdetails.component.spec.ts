import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelpartneryourdetailsComponent } from './delpartneryourdetails.component';

describe('DelpartneryourdetailsComponent', () => {
  let component: DelpartneryourdetailsComponent;
  let fixture: ComponentFixture<DelpartneryourdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelpartneryourdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DelpartneryourdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
