import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDietarypreferanceComponent } from './user-dietarypreferance.component';

describe('UserDietarypreferanceComponent', () => {
  let component: UserDietarypreferanceComponent;
  let fixture: ComponentFixture<UserDietarypreferanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDietarypreferanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDietarypreferanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
