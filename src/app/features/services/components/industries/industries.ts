import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { INDUSTRIES } from '../../../../core/data/industry';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [
    CommonModule,
    SectionTitle
  ],
  templateUrl: './industries.html',
  styleUrl: './industries.scss'
})
export class Industries {

  industries = INDUSTRIES;

}