import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminchefdetailsComponent } from './superadminchefdetails.component';

describe('SuperadminchefdetailsComponent', () => {
  let component: SuperadminchefdetailsComponent;
  let fixture: ComponentFixture<SuperadminchefdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminchefdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadminchefdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
