import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import {  ServiceDto } from '../../../../core/models/service.model';
import { RouterLink } from '@angular/router';
import { MediaService } from '../../../../core/services/media.service';

@Component({
  selector: 'app-service-overview',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './service-overview.html',
  styleUrl: './service-overview.scss'
})
export class ServiceOverview {
readonly media = inject(MediaService);
  service = input.required<ServiceDto>();

}