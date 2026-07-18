import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionTitle } from '../../../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-business-hours',
  standalone: true,
  imports: [
    CommonModule,
    SectionTitle
  ],
  templateUrl: './business-hours.html',
  styleUrl: './business-hours.scss'
})
export class BusinessHoursComponent {

  businessHours = [
    {
      day: 'Monday - Friday',
      time: '09:00 AM - 06:00 PM'
    },
    {
      day: 'Saturday',
      time: '09:00 AM - 02:00 PM'
    },
    {
      day: 'Sunday',
      time: 'Closed'
    }
  ];

}