import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupenpageComponent } from './coupenpage.component';

describe('CoupenpageComponent', () => {
  let component: CoupenpageComponent;
  let fixture: ComponentFixture<CoupenpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoupenpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoupenpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
