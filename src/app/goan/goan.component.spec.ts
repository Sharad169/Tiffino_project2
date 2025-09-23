import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoanComponent } from './goan.component';

describe('GoanComponent', () => {
  let component: GoanComponent;
  let fixture: ComponentFixture<GoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
