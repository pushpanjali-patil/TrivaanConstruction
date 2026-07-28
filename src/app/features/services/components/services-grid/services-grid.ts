import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { ServiceService } from '../../../../core/services/service.service';
import { ServiceDto } from '../../../../core/models/service.model';
import { MediaService } from '../../../../core/services/media.service';

@Component({
  selector: 'app-services-grid',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SectionTitle
  ],
  templateUrl: './services-grid.html',
  styleUrl: './services-grid.scss'
})
export class ServicesGrid implements OnInit {

  private serviceService = inject(ServiceService);
  readonly media = inject(MediaService);
  services = signal<ServiceDto[]>([]);

  ngOnInit(): void {
    this.loadServices();
  }

  private loadServices(): void {
    this.serviceService.getAll().subscribe({
      next: (response) => {
        this.services.set(response.data);
      },
      error: (err) => {
        console.error('Failed to load services', err);
      }
    });
  }

}