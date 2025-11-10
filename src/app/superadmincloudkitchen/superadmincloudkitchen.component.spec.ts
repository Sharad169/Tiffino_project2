import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadmincloudkitchenComponent } from './superadmincloudkitchen.component';

describe('SuperadmincloudkitchenComponent', () => {
  let component: SuperadmincloudkitchenComponent;
  let fixture: ComponentFixture<SuperadmincloudkitchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadmincloudkitchenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadmincloudkitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
