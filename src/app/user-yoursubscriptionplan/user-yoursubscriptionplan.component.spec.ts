import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserYoursubscriptionplanComponent } from './user-yoursubscriptionplan.component';

describe('UserYoursubscriptionplanComponent', () => {
  let component: UserYoursubscriptionplanComponent;
  let fixture: ComponentFixture<UserYoursubscriptionplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserYoursubscriptionplanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserYoursubscriptionplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
