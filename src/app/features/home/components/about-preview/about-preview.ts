import { Component } from '@angular/core';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-preview',
  imports: [
   // SectionTitle
   RouterLink
  ],
  templateUrl: './about-preview.html',
  styleUrl: './about-preview.scss',
})
export class AboutPreview {

}
