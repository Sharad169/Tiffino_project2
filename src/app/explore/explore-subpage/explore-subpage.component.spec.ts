import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreSubpageComponent } from './explore-subpage.component';

describe('ExploreSubpageComponent', () => {
  let component: ExploreSubpageComponent;
  let fixture: ComponentFixture<ExploreSubpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreSubpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExploreSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
