import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerorderdeliverbyyouComponent } from './managerorderdeliverbyyou.component';

describe('ManagerorderdeliverbyyouComponent', () => {
  let component: ManagerorderdeliverbyyouComponent;
  let fixture: ComponentFixture<ManagerorderdeliverbyyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerorderdeliverbyyouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerorderdeliverbyyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
