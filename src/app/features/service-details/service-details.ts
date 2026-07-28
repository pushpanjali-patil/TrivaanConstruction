import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PageBanner } from '../../shared/components/page-banner/page-banner';
import { ServiceOverview } from './components/service-overview/service-overview';

import { ServiceService } from '../../core/services/service.service';
import { ServiceDto } from '../../core/models/service.model';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [
    PageBanner,
    ServiceOverview
  ],
  templateUrl: './service-details.html',
  styleUrl: './service-details.scss'
})
export class ServiceDetails implements OnInit {

  private route = inject(ActivatedRoute);
  private serviceService = inject(ServiceService);

  service = signal<ServiceDto | null>(null);

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug) {
      this.loadService(slug);
    }
  }

  private loadService(slug: string): void {

    this.serviceService.getBySlug(slug).subscribe({

      next: (response) => {
        this.service.set(response.data);
      },

      error: (error) => {
        console.error('Failed to load service.', error);
      }

    });

  }

}