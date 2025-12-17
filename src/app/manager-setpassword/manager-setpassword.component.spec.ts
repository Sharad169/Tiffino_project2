import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSetpasswordComponent } from './manager-setpassword.component';

describe('ManagerSetpasswordComponent', () => {
  let component: ManagerSetpasswordComponent;
  let fixture: ComponentFixture<ManagerSetpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerSetpasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerSetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
