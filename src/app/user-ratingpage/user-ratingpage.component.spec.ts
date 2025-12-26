import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRatingpageComponent } from './user-ratingpage.component';

describe('UserRatingpageComponent', () => {
  let component: UserRatingpageComponent;
  let fixture: ComponentFixture<UserRatingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRatingpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserRatingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
