import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefSetpasswordComponent } from './chef-setpassword.component';

describe('ChefSetpasswordComponent', () => {
  let component: ChefSetpasswordComponent;
  let fixture: ComponentFixture<ChefSetpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefSetpasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefSetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
