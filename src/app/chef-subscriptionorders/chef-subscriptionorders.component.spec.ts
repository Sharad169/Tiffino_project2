import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefSubscriptionordersComponent } from './chef-subscriptionorders.component';

describe('ChefSubscriptionordersComponent', () => {
  let component: ChefSubscriptionordersComponent;
  let fixture: ComponentFixture<ChefSubscriptionordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefSubscriptionordersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefSubscriptionordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
