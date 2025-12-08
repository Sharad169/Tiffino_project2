import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminsetpasswordComponent } from './superadminsetpassword.component';

describe('SuperadminsetpasswordComponent', () => {
  let component: SuperadminsetpasswordComponent;
  let fixture: ComponentFixture<SuperadminsetpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminsetpasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadminsetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
