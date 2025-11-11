import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadmincoupanpageComponent } from './superadmincoupanpage.component';

describe('SuperadmincoupanpageComponent', () => {
  let component: SuperadmincoupanpageComponent;
  let fixture: ComponentFixture<SuperadmincoupanpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadmincoupanpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadmincoupanpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
