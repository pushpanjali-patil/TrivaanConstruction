import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesOverview } from './services-overview';

describe('ServicesOverview', () => {
  let component: ServicesOverview;
  let fixture: ComponentFixture<ServicesOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
