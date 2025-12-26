import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCouponpageComponent } from './user-couponpage.component';

describe('UserCouponpageComponent', () => {
  let component: UserCouponpageComponent;
  let fixture: ComponentFixture<UserCouponpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCouponpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCouponpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
