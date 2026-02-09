import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminsubscriberlistComponent } from './superadminsubscriberlist.component';

describe('SuperadminsubscriberlistComponent', () => {
  let component: SuperadminsubscriberlistComponent;
  let fixture: ComponentFixture<SuperadminsubscriberlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminsubscriberlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadminsubscriberlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
