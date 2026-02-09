import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefYourdetailspageComponent } from './chef-yourdetailspage.component';

describe('ChefYourdetailspageComponent', () => {
  let component: ChefYourdetailspageComponent;
  let fixture: ComponentFixture<ChefYourdetailspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefYourdetailspageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefYourdetailspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
