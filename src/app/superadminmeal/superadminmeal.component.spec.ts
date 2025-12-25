import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminmealComponent } from './superadminmeal.component';

describe('SuperadminmealComponent', () => {
  let component: SuperadminmealComponent;
  let fixture: ComponentFixture<SuperadminmealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminmealComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadminmealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
