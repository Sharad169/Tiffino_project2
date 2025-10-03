import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalianMenuComponent } from './italian-menu.component';

describe('ItalianMenuComponent', () => {
  let component: ItalianMenuComponent;
  let fixture: ComponentFixture<ItalianMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItalianMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItalianMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
