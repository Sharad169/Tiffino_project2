import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetplanComponent } from './getplan.component';

describe('GetplanComponent', () => {
  let component: GetplanComponent;
  let fixture: ComponentFixture<GetplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetplanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
