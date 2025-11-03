import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerregiComponent } from './managerregi.component';

describe('ManagerregiComponent', () => {
  let component: ManagerregiComponent;
  let fixture: ComponentFixture<ManagerregiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerregiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerregiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
