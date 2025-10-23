import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deleteaccount2Component } from './deleteaccount2.component';

describe('Deleteaccount2Component', () => {
  let component: Deleteaccount2Component;
  let fixture: ComponentFixture<Deleteaccount2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deleteaccount2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Deleteaccount2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
