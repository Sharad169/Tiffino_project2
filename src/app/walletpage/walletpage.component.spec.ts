import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletpageComponent } from './walletpage.component';

describe('WalletpageComponent', () => {
  let component: WalletpageComponent;
  let fixture: ComponentFixture<WalletpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalletpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WalletpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
