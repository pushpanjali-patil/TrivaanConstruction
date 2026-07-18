import { Component, signal } from '@angular/core';
import { PROJECTS } from '../../../../core/data/projects';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll';


@Component({
  selector: 'app-projects-preview',
  standalone: true,
  imports: [
    SectionTitle,
    RevealOnScrollDirective
  ],
  templateUrl: './projects-preview.html',
  styleUrl: './projects-preview.scss'
})
export class ProjectsPreview {

  projects = signal(PROJECTS);

}