import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadmindelpartnerComponent } from './superadmindelpartner.component';

describe('SuperadmindelpartnerComponent', () => {
  let component: SuperadmindelpartnerComponent;
  let fixture: ComponentFixture<SuperadmindelpartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadmindelpartnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadmindelpartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
