import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserItemdeliverdpageComponent } from './user-itemdeliverdpage.component';

describe('UserItemdeliverdpageComponent', () => {
  let component: UserItemdeliverdpageComponent;
  let fixture: ComponentFixture<UserItemdeliverdpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserItemdeliverdpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserItemdeliverdpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
