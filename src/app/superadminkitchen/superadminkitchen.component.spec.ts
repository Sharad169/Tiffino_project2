import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminkitchenComponent } from './superadminkitchen.component';

describe('SuperadminkitchenComponent', () => {
  let component: SuperadminkitchenComponent;
  let fixture: ComponentFixture<SuperadminkitchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminkitchenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadminkitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
