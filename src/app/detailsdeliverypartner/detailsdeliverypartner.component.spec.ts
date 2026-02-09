import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsdeliverypartnerComponent } from './detailsdeliverypartner.component';

describe('DetailsdeliverypartnerComponent', () => {
  let component: DetailsdeliverypartnerComponent;
  let fixture: ComponentFixture<DetailsdeliverypartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsdeliverypartnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsdeliverypartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
