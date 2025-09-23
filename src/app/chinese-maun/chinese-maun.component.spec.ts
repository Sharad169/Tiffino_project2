import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineseMaunComponent } from './chinese-maun.component';

describe('ChineseMaunComponent', () => {
  let component: ChineseMaunComponent;
  let fixture: ComponentFixture<ChineseMaunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChineseMaunComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChineseMaunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
