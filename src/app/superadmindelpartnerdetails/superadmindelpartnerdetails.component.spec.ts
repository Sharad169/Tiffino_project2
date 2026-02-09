import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadmindelpartnerdetailsComponent } from './superadmindelpartnerdetails.component';

describe('SuperadmindelpartnerdetailsComponent', () => {
  let component: SuperadmindelpartnerdetailsComponent;
  let fixture: ComponentFixture<SuperadmindelpartnerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadmindelpartnerdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadmindelpartnerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
