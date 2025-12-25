import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminkitchendetailsComponent } from './superadminkitchendetails.component';

describe('SuperadminkitchendetailsComponent', () => {
  let component: SuperadminkitchendetailsComponent;
  let fixture: ComponentFixture<SuperadminkitchendetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminkitchendetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadminkitchendetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
