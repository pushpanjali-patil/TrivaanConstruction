import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SectionTitle } from '../../../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    CommonModule,
    SectionTitle
  ],
  templateUrl: './map.html',
  styleUrl: './map.scss'
})
export class MapComponent {

  private sanitizer = inject(DomSanitizer);

  mapUrl: SafeResourceUrl;

  constructor() {

    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps?q=Pune,Maharashtra&output=embed'
    );

  }

}