import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerYourdetailspageComponent } from './manager-yourdetailspage.component';

describe('ManagerYourdetailspageComponent', () => {
  let component: ManagerYourdetailspageComponent;
  let fixture: ComponentFixture<ManagerYourdetailspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerYourdetailspageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerYourdetailspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
