import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminchefeditpageComponent } from './superadminchefeditpage.component';

describe('SuperadminchefeditpageComponent', () => {
  let component: SuperadminchefeditpageComponent;
  let fixture: ComponentFixture<SuperadminchefeditpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminchefeditpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadminchefeditpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
