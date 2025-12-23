import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerstartordersubscriberComponent } from './managerstartordersubscriber.component';

describe('ManagerstartordersubscriberComponent', () => {
  let component: ManagerstartordersubscriberComponent;
  let fixture: ComponentFixture<ManagerstartordersubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerstartordersubscriberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerstartordersubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
