import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadmincheflistComponent } from './superadmincheflist.component';

describe('SuperadmincheflistComponent', () => {
  let component: SuperadmincheflistComponent;
  let fixture: ComponentFixture<SuperadmincheflistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadmincheflistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadmincheflistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
