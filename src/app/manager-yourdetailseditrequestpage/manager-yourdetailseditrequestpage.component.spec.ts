import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerYourdetailseditrequestpageComponent } from './manager-yourdetailseditrequestpage.component';

describe('ManagerYourdetailseditrequestpageComponent', () => {
  let component: ManagerYourdetailseditrequestpageComponent;
  let fixture: ComponentFixture<ManagerYourdetailseditrequestpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerYourdetailseditrequestpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerYourdetailseditrequestpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
