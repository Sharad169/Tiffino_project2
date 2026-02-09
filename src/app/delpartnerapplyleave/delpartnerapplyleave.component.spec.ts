import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelpartnerapplyleaveComponent } from './delpartnerapplyleave.component';

describe('DelpartnerapplyleaveComponent', () => {
  let component: DelpartnerapplyleaveComponent;
  let fixture: ComponentFixture<DelpartnerapplyleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelpartnerapplyleaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DelpartnerapplyleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
