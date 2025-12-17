import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadmineditlistComponent } from './superadmineditlist.component';

describe('SuperadmineditlistComponent', () => {
  let component: SuperadmineditlistComponent;
  let fixture: ComponentFixture<SuperadmineditlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadmineditlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadmineditlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
