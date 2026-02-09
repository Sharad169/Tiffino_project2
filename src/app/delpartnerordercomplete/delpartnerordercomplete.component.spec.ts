import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelpartnerordercompleteComponent } from './delpartnerordercomplete.component';

describe('DelpartnerordercompleteComponent', () => {
  let component: DelpartnerordercompleteComponent;
  let fixture: ComponentFixture<DelpartnerordercompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelpartnerordercompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DelpartnerordercompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
