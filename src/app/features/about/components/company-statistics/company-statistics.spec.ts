import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyStatistics } from './company-statistics';

describe('CompanyStatistics', () => {
  let component: CompanyStatistics;
  let fixture: ComponentFixture<CompanyStatistics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyStatistics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyStatistics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
