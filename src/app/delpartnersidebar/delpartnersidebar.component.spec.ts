import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelpartnersidebarComponent } from './delpartnersidebar.component';

describe('DelpartnersidebarComponent', () => {
  let component: DelpartnersidebarComponent;
  let fixture: ComponentFixture<DelpartnersidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelpartnersidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DelpartnersidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
