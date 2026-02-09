import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Itemdelevered2Component } from './itemdelevered2.component';

describe('Itemdelevered2Component', () => {
  let component: Itemdelevered2Component;
  let fixture: ComponentFixture<Itemdelevered2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Itemdelevered2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Itemdelevered2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
