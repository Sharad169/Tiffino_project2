import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminmanagerdetailsComponent } from './superadminmanagerdetails.component';

describe('SuperadminmanagerdetailsComponent', () => {
  let component: SuperadminmanagerdetailsComponent;
  let fixture: ComponentFixture<SuperadminmanagerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminmanagerdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadminmanagerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
