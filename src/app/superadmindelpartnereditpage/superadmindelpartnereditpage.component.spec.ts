import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadmindelpartnereditpageComponent } from './superadmindelpartnereditpage.component';

describe('SuperadmindelpartnereditpageComponent', () => {
  let component: SuperadmindelpartnereditpageComponent;
  let fixture: ComponentFixture<SuperadmindelpartnereditpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadmindelpartnereditpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadmindelpartnereditpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
