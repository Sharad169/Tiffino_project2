import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefYourdetailsrequestpageComponent } from './chef-yourdetailsrequestpage.component';

describe('ChefYourdetailsrequestpageComponent', () => {
  let component: ChefYourdetailsrequestpageComponent;
  let fixture: ComponentFixture<ChefYourdetailsrequestpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefYourdetailsrequestpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefYourdetailsrequestpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
