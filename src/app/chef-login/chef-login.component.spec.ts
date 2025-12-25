import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefLoginComponent } from './chef-login.component';

describe('ChefLoginComponent', () => {
  let component: ChefLoginComponent;
  let fixture: ComponentFixture<ChefLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
