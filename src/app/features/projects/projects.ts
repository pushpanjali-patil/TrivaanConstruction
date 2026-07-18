import { Component } from '@angular/core';
import { PageBanner } from '../../shared/components/page-banner/page-banner';
import { ProjectsOverview } from './components/projects-overview/projects-overview';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-projects',
  imports: [PageBanner,ProjectsOverview],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

}
