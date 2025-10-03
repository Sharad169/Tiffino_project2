import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalMenuComponent } from './international-menu.component';

describe('InternationalMenuComponent', () => {
  let component: InternationalMenuComponent;
  let fixture: ComponentFixture<InternationalMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternationalMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternationalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
