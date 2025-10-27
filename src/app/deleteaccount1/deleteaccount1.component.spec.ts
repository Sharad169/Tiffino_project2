import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deleteaccount1Component } from './deleteaccount1.component';

describe('Deleteaccount1Component', () => {
  let component: Deleteaccount1Component;
  let fixture: ComponentFixture<Deleteaccount1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deleteaccount1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Deleteaccount1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
