import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubscriptionplandetailsComponent } from './user-subscriptionplandetails.component';

describe('UserSubscriptionplandetailsComponent', () => {
  let component: UserSubscriptionplandetailsComponent;
  let fixture: ComponentFixture<UserSubscriptionplandetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSubscriptionplandetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserSubscriptionplandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
