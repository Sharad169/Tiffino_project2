import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNetworkerrorpageComponent } from './user-networkerrorpage.component';

describe('UserNetworkerrorpageComponent', () => {
  let component: UserNetworkerrorpageComponent;
  let fixture: ComponentFixture<UserNetworkerrorpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserNetworkerrorpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserNetworkerrorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
