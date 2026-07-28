import { Component, inject } from '@angular/core';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../../../core/services/project.service';
import { ProjectDto } from '../../../../core/models/project.model';
import { MediaService } from '../../../../core/services/media.service';


@Component({
  selector: 'app-projects-preview',
  standalone: true,
  imports: [
    SectionTitle,
    RevealOnScrollDirective,
    RouterLink
  ],
  templateUrl: './projects-preview.html',
  styleUrl: './projects-preview.scss'
})
export class ProjectsPreview {

  projects: ProjectDto[] = [];
readonly media = inject(MediaService);
  constructor(
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.projectService.getFeatured().subscribe(response => {
      this.projects = response.data;
    });
  }

}