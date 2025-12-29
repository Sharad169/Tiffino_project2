import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWishlistpageComponent } from './user-wishlistpage.component';

describe('UserWishlistpageComponent', () => {
  let component: UserWishlistpageComponent;
  let fixture: ComponentFixture<UserWishlistpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserWishlistpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserWishlistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
