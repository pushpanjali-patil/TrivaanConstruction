import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Service } from '../../../../core/models/service.model';
import { PROJECTS } from '../../../../core/data/projects';


@Component({
  selector: 'app-related-projects',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './related-projects.html',
  styleUrl: './related-projects.scss'
})
export class RelatedProjects {

  service = input.required<Service>();

  projects = computed(() =>
    PROJECTS.filter(
      p => p.serviceSlug === this.service().slug
    )
  );

}