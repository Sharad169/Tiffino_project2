import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerhelpsupportpageComponent } from './managerhelpsupportpage.component';

describe('ManagerhelpsupportpageComponent', () => {
  let component: ManagerhelpsupportpageComponent;
  let fixture: ComponentFixture<ManagerhelpsupportpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerhelpsupportpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerhelpsupportpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
