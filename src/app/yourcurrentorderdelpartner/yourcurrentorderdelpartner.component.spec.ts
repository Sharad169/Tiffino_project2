import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourcurrentorderdelpartnerComponent } from './yourcurrentorderdelpartner.component';

describe('YourcurrentorderdelpartnerComponent', () => {
  let component: YourcurrentorderdelpartnerComponent;
  let fixture: ComponentFixture<YourcurrentorderdelpartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourcurrentorderdelpartnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourcurrentorderdelpartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
