import { Component, signal } from '@angular/core';
import { SERVICES } from '../../../../core/data/services';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll';


@Component({
  selector: 'app-services-preview',
  standalone: true,
  imports: [
    SectionTitle,
    RevealOnScrollDirective
  ],
  templateUrl: './services-preview.html',
  styleUrl: './services-preview.scss'
})
export class ServicesPreview {

  services = signal(SERVICES);

}