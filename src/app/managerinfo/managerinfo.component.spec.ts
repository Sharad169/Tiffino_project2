import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerinfoComponent } from './managerinfo.component';

describe('ManagerinfoComponent', () => {
  let component: ManagerinfoComponent;
  let fixture: ComponentFixture<ManagerinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
