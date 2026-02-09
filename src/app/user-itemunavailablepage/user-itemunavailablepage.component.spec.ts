import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserItemunavailablepageComponent } from './user-itemunavailablepage.component';

describe('UserItemunavailablepageComponent', () => {
  let component: UserItemunavailablepageComponent;
  let fixture: ComponentFixture<UserItemunavailablepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserItemunavailablepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserItemunavailablepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
