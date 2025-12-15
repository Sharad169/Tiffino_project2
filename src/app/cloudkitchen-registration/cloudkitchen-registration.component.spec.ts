import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudkitchenRegistrationComponent } from './cloudkitchen-registration.component';

describe('CloudkitchenRegistrationComponent', () => {
  let component: CloudkitchenRegistrationComponent;
  let fixture: ComponentFixture<CloudkitchenRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudkitchenRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CloudkitchenRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
