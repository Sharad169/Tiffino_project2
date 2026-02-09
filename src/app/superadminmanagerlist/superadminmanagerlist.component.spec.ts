import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminmanagerlistComponent } from './superadminmanagerlist.component';

describe('SuperadminmanagerlistComponent', () => {
  let component: SuperadminmanagerlistComponent;
  let fixture: ComponentFixture<SuperadminmanagerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminmanagerlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadminmanagerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
