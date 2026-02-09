import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccount1Component } from './deleteaccount1.component';

describe('DeleteAccount1Component', () => {
  let component: DeleteAccount1Component;
  let fixture: ComponentFixture<DeleteAccount1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteAccount1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteAccount1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
