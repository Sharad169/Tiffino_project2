import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefSidebarComponent } from './chef-sidebar.component';

describe('ChefSidebarComponent', () => {
  let component: ChefSidebarComponent;
  let fixture: ComponentFixture<ChefSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
