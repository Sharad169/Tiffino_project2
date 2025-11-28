import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefApplyleaveComponent } from './chef-applyleave.component';

describe('ChefApplyleaveComponent', () => {
  let component: ChefApplyleaveComponent;
  let fixture: ComponentFixture<ChefApplyleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefApplyleaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefApplyleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
