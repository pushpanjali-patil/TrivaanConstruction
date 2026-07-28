import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PageBanner } from '../../shared/components/page-banner/page-banner';
import { ProjectService } from '../../core/services/project.service';
import { ProjectDto } from '../../core/models/project.model';
import { ApiResponse } from '../../core/models/api-response.model';
import { MediaService } from '../../core/services/media.service';

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
export class ProjectDetails implements OnInit {
private cdr = inject(ChangeDetectorRef);
    private route = inject(ActivatedRoute);
    private projectService = inject(ProjectService);

   readonly media = inject(MediaService);

    project?: ProjectDto;

    ngOnInit(): void {

        const slug = this.route.snapshot.paramMap.get('slug');

        if (!slug) return;

        this.projectService
            .getBySlug(slug)
            .subscribe((response: ApiResponse<ProjectDto>) => {

                this.project = response.data;
                 this.cdr.detectChanges();

            });

    }

}