import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefEditdetailspageComponent } from './chef-editdetailspage.component';

describe('ChefEditdetailspageComponent', () => {
  let component: ChefEditdetailspageComponent;
  let fixture: ComponentFixture<ChefEditdetailspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefEditdetailspageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefEditdetailspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
