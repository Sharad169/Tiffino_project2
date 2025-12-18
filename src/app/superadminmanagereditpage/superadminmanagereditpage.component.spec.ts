import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminmanagereditpageComponent } from './superadminmanagereditpage.component';

describe('SuperadminmanagereditpageComponent', () => {
  let component: SuperadminmanagereditpageComponent;
  let fixture: ComponentFixture<SuperadminmanagereditpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminmanagereditpageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SuperadminmanagereditpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
