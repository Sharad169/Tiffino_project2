import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KashmiriComponent } from './kashmiri.component';

describe('KashmiriComponent', () => {
  let component: KashmiriComponent;
  let fixture: ComponentFixture<KashmiriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KashmiriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KashmiriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
