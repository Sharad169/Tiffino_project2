import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubscriptionpageComponent } from './user-subscriptionpage.component';

describe('UserSubscriptionpageComponent', () => {
  let component: UserSubscriptionpageComponent;
  let fixture: ComponentFixture<UserSubscriptionpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSubscriptionpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserSubscriptionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
