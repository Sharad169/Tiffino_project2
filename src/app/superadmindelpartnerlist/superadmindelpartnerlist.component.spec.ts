import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadmindelpartnerlistComponent } from './superadmindelpartnerlist.component';

describe('SuperadmindelpartnerlistComponent', () => {
  let component: SuperadmindelpartnerlistComponent;
  let fixture: ComponentFixture<SuperadmindelpartnerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadmindelpartnerlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadmindelpartnerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
