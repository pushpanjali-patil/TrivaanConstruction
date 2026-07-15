import { Component, signal } from '@angular/core';
import { PROJECTS } from '../../../../core/data/projects';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';


@Component({
  selector: 'app-projects-preview',
  standalone: true,
  imports: [
    SectionTitle
  ],
  templateUrl: './projects-preview.html',
  styleUrl: './projects-preview.scss'
})
export class ProjectsPreview {

  projects = signal(PROJECTS);

}