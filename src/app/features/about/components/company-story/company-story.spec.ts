import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyStory } from './company-story';

describe('CompanyStory', () => {
  let component: CompanyStory;
  let fixture: ComponentFixture<CompanyStory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyStory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyStory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
