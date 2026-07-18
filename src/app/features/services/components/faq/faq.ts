import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FAQS } from '../../../../core/data/faqs';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    CommonModule,
    SectionTitle
  ],
  templateUrl: './faq.html',
  styleUrl: './faq.scss'
})
export class Faq {

  faqs = FAQS;

}