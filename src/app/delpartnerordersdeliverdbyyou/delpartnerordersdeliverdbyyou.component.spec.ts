import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelpartnerordersdeliverdbyyouComponent } from './delpartnerordersdeliverdbyyou.component';

describe('DelpartnerordersdeliverdbyyouComponent', () => {
  let component: DelpartnerordersdeliverdbyyouComponent;
  let fixture: ComponentFixture<DelpartnerordersdeliverdbyyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelpartnerordersdeliverdbyyouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DelpartnerordersdeliverdbyyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
