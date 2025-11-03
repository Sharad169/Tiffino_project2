import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminsetpassswordComponent } from './superadminsetpasssword.component';

describe('SuperadminsetpassswordComponent', () => {
  let component: SuperadminsetpassswordComponent;
  let fixture: ComponentFixture<SuperadminsetpassswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminsetpassswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadminsetpassswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
