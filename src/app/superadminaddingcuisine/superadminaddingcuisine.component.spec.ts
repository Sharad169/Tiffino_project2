import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminaddingcuisineComponent } from './superadminaddingcuisine.component';

describe('SuperadminaddingcuisineComponent', () => {
  let component: SuperadminaddingcuisineComponent;
  let fixture: ComponentFixture<SuperadminaddingcuisineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminaddingcuisineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadminaddingcuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
