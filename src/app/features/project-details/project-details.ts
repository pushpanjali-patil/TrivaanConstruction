import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PageBanner } from '../../shared/components/page-banner/page-banner';
import { PROJECTS } from '../../core/data/projects';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    CommonModule,
    PageBanner
  ],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss'
})
export class ProjectDetails {

  private route = inject(ActivatedRoute);

  project = PROJECTS.find(
    p => p.slug === this.route.snapshot.paramMap.get('slug')
  );

}