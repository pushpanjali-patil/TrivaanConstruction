import { Component, signal } from '@angular/core';
import { SERVICES } from '../../../../core/data/services';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';


@Component({
  selector: 'app-services-preview',
  standalone: true,
  imports: [
    SectionTitle
  ],
  templateUrl: './services-preview.html',
  styleUrl: './services-preview.scss'
})
export class ServicesPreview {

  services = signal(SERVICES);

}