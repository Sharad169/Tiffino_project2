import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFinalpageComponent } from './user-finalpage.component';

describe('UserFinalpageComponent', () => {
  let component: UserFinalpageComponent;
  let fixture: ComponentFixture<UserFinalpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFinalpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserFinalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
