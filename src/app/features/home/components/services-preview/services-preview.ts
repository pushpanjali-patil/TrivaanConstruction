import { Component, inject, signal } from '@angular/core';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll';
import { RouterLink } from '@angular/router';
import { ServiceDto } from '../../../../core/models/service.model';
import { ServiceService } from '../../../../core/services/service.service';
import { MediaService } from '../../../../core/services/media.service';


@Component({
  selector: 'app-services-preview',
  standalone: true,
  imports: [
    SectionTitle,RouterLink,
    RevealOnScrollDirective
  ],
  templateUrl: './services-preview.html',
  styleUrl: './services-preview.scss'
})
export class ServicesPreview {

  constructor(private serviceService: ServiceService)
  {

  }
  readonly media = inject(MediaService);
 services = signal<ServiceDto[]>([]);
 ngOnInit() {
  this.serviceService.getAll().subscribe(res => {
    this.services.set(res.data);
  });
}

}