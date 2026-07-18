import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-company-statistics',
  standalone: true,
  imports: [CommonModule, SectionTitle],
  templateUrl: './company-statistics.html',
  styleUrl: './company-statistics.scss'
})
export class CompanyStatistics {

  stats = [
    {
      number: '15+',
      title: 'Years Experience'
    },
    {
      number: '250+',
      title: 'Projects Completed'
    },
    {
      number: '120+',
      title: 'Happy Clients'
    },
    {
      number: '40+',
      title: 'Skilled Professionals'
    }
  ];

}