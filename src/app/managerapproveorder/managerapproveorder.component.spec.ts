import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerapproveorderComponent } from './managerapproveorder.component';

describe('ManagerapproveorderComponent', () => {
  let component: ManagerapproveorderComponent;
  let fixture: ComponentFixture<ManagerapproveorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerapproveorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerapproveorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
