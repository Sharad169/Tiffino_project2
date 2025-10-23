import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietarypreferenceComponent } from './dietarypreference.component';

describe('DietarypreferenceComponent', () => {
  let component: DietarypreferenceComponent;
  let fixture: ComponentFixture<DietarypreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietarypreferenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DietarypreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
