import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaharashtrianComponent } from './maharashtrian.component';

describe('MaharashtrianComponent', () => {
  let component: MaharashtrianComponent;
  let fixture: ComponentFixture<MaharashtrianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaharashtrianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaharashtrianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
