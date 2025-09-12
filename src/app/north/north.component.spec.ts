import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthComponent } from './north.component';

describe('NorthComponent', () => {
  let component: NorthComponent;
  let fixture: ComponentFixture<NorthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NorthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NorthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
