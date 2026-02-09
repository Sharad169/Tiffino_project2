import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoreclosedpageComponent } from './user-storeclosedpage.component';

describe('UserStoreclosedpageComponent', () => {
  let component: UserStoreclosedpageComponent;
  let fixture: ComponentFixture<UserStoreclosedpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserStoreclosedpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserStoreclosedpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
