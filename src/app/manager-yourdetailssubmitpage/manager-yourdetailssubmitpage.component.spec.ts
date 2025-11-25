import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerYourdetailssubmitpageComponent } from './manager-yourdetailssubmitpage.component';

describe('ManagerYourdetailssubmitpageComponent', () => {
  let component: ManagerYourdetailssubmitpageComponent;
  let fixture: ComponentFixture<ManagerYourdetailssubmitpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerYourdetailssubmitpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerYourdetailssubmitpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
