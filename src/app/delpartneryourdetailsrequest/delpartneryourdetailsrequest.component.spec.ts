import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelpartneryourdetailsrequestComponent } from './delpartneryourdetailsrequest.component';

describe('DelpartneryourdetailsrequestComponent', () => {
  let component: DelpartneryourdetailsrequestComponent;
  let fixture: ComponentFixture<DelpartneryourdetailsrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelpartneryourdetailsrequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DelpartneryourdetailsrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
