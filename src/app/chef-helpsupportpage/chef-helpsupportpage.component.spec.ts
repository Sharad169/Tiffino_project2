import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefHelpsupportpageComponent } from './chef-helpsupportpage.component';

describe('ChefHelpsupportpageComponent', () => {
  let component: ChefHelpsupportpageComponent;
  let fixture: ComponentFixture<ChefHelpsupportpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefHelpsupportpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefHelpsupportpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
