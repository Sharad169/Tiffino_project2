import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedorderpageComponent } from './detailedorderpage.component';

describe('DetailedorderpageComponent', () => {
  let component: DetailedorderpageComponent;
  let fixture: ComponentFixture<DetailedorderpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedorderpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailedorderpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
