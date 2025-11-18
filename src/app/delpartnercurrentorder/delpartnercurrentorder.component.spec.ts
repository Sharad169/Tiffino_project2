import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelpartnercurrentorderComponent } from './delpartnercurrentorder.component';

describe('DelpartnercurrentorderComponent', () => {
  let component: DelpartnercurrentorderComponent;
  let fixture: ComponentFixture<DelpartnercurrentorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelpartnercurrentorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DelpartnercurrentorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
