import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminemployeedetailsComponent } from './superadminemployeedetails.component';

describe('SuperadminemployeedetailsComponent', () => {
  let component: SuperadminemployeedetailsComponent;
  let fixture: ComponentFixture<SuperadminemployeedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminemployeedetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadminemployeedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
