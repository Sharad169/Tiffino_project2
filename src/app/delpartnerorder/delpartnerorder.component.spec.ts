import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelpartnerorderComponent } from './delpartnerorder.component';

describe('DelpartnerorderComponent', () => {
  let component: DelpartnerorderComponent;
  let fixture: ComponentFixture<DelpartnerorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelpartnerorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DelpartnerorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
