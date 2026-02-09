import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelpartnerhelpsupportpageComponent } from './delpartnerhelpsupportpage.component';

describe('DelpartnerhelpsupportpageComponent', () => {
  let component: DelpartnerhelpsupportpageComponent;
  let fixture: ComponentFixture<DelpartnerhelpsupportpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelpartnerhelpsupportpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DelpartnerhelpsupportpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
