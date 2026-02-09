import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOrderdelpartnerdetailsComponent } from './manager-orderdelpartnerdetails.component';

describe('ManagerOrderdelpartnerdetailsComponent', () => {
  let component: ManagerOrderdelpartnerdetailsComponent;
  let fixture: ComponentFixture<ManagerOrderdelpartnerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerOrderdelpartnerdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerOrderdelpartnerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
