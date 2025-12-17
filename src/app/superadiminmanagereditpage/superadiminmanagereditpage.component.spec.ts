import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadiminmanagereditpageComponent } from './superadiminmanagereditpage.component';

describe('SuperadiminmanagereditpageComponent', () => {
  let component: SuperadiminmanagereditpageComponent;
  let fixture: ComponentFixture<SuperadiminmanagereditpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadiminmanagereditpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadiminmanagereditpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
