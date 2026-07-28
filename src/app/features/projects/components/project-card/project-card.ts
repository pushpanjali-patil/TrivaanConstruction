import { Component, inject, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {  ProjectDto } from '../../../../core/models/project.model';
import { environment } from '../../../../../assests/environment';
import { MediaService } from '../../../../core/services/media.service';


@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {
readonly media = inject(MediaService);
   project = input.required<ProjectDto>();

}