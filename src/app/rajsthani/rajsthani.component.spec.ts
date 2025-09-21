import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajsthaniComponent } from './rajsthani.component';

describe('RajsthaniComponent', () => {
  let component: RajsthaniComponent;
  let fixture: ComponentFixture<RajsthaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RajsthaniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RajsthaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
