import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageryourdetailseditrequestpageComponent } from './manageryourdetailseditrequestpage.component';

describe('ManageryourdetailseditrequestpageComponent', () => {
  let component: ManageryourdetailseditrequestpageComponent;
  let fixture: ComponentFixture<ManageryourdetailseditrequestpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageryourdetailseditrequestpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageryourdetailseditrequestpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
