import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefSubscriptioneditdetailsComponent } from './chef-subscriptioneditdetails.component';

describe('ChefSubscriptioneditdetailsComponent', () => {
  let component: ChefSubscriptioneditdetailsComponent;
  let fixture: ComponentFixture<ChefSubscriptioneditdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefSubscriptioneditdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefSubscriptioneditdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
