import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelpartnerdashboardComponent } from './delpartnerdashboard.component';

describe('DelpartnerdashboardComponent', () => {
  let component: DelpartnerdashboardComponent;
  let fixture: ComponentFixture<DelpartnerdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelpartnerdashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DelpartnerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
