import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BengaliComponent } from './bengali.component';

describe('BengaliComponent', () => {
  let component: BengaliComponent;
  let fixture: ComponentFixture<BengaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BengaliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BengaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
