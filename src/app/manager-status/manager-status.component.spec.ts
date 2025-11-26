import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerStatusComponent } from './manager-status.component';

describe('ManagerStatusComponent', () => {
  let component: ManagerStatusComponent;
  let fixture: ComponentFixture<ManagerStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
