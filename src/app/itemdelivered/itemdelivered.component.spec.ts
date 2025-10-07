import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemdeliveredComponent } from './itemdelivered.component';

describe('ItemdeliveredComponent', () => {
  let component: ItemdeliveredComponent;
  let fixture: ComponentFixture<ItemdeliveredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemdeliveredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemdeliveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
