import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsplanresumeComponent } from './subsplanresume.component';

describe('SubsplanresumeComponent', () => {
  let component: SubsplanresumeComponent;
  let fixture: ComponentFixture<SubsplanresumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubsplanresumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubsplanresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
