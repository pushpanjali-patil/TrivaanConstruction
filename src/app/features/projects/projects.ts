import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageBanner } from '../../shared/components/page-banner/page-banner';
import { SectionTitle } from '../../shared/components/section-title/section-title';

import { ProjectCard } from './components/project-card/project-card';

import { ProjectService } from '../../core/services/project.service';
import { ProjectDto } from '../../core/models/project.model';
import { ApiResponse } from '../../core/models/api-response.model';

@Component({
  selector:'app-projects',
  standalone:true,
  imports:[
    CommonModule,
    PageBanner,
    SectionTitle,
    ProjectCard
  ],
  templateUrl:'./projects.html',
  styleUrl:'./projects.scss'
})
export class Projects{

     projects: ProjectDto[] = [];

    constructor(
        private projectService: ProjectService
    ) { }

    ngOnInit(): void {

        this.projectService.getAll()
            .subscribe((response: ApiResponse<ProjectDto[]>) => {

                this.projects = response.data;

            });

    }
}