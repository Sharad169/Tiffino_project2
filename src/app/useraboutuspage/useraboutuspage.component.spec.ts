import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraboutuspageComponent } from './useraboutuspage.component';

describe('UseraboutuspageComponent', () => {
  let component: UseraboutuspageComponent;
  let fixture: ComponentFixture<UseraboutuspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseraboutuspageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UseraboutuspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
