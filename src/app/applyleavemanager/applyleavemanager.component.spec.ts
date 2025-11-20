import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyleavemanagerComponent } from './applyleavemanager.component';

describe('ApplyleavemanagerComponent', () => {
  let component: ApplyleavemanagerComponent;
  let fixture: ComponentFixture<ApplyleavemanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyleavemanagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplyleavemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
