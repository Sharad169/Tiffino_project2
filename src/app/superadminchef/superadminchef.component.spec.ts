import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminchefComponent } from './superadminchef.component';

describe('SuperadminchefComponent', () => {
  let component: SuperadminchefComponent;
  let fixture: ComponentFixture<SuperadminchefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminchefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadminchefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
