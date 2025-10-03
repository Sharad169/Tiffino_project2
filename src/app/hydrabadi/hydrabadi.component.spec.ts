import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrabadiComponent } from './hydrabadi.component';

describe('HydrabadiComponent', () => {
  let component: HydrabadiComponent;
  let fixture: ComponentFixture<HydrabadiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HydrabadiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HydrabadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
