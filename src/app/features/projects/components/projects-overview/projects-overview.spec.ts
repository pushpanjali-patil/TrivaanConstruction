import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsOverview } from './projects-overview';

describe('ProjectsOverview', () => {
  let component: ProjectsOverview;
  let fixture: ComponentFixture<ProjectsOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
