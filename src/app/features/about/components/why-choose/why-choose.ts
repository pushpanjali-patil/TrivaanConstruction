import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-why-choose',
  standalone: true,
  imports: [CommonModule, SectionTitle],
  templateUrl: './why-choose.html',
  styleUrl: './why-choose.scss'
})
export class WhyChoose {

  features = [
    'Experienced Civil Engineers',
    'Modern Machinery & Equipment',
    'Strict Quality Control',
    'On-Time Project Delivery',
    'Safety-First Work Culture',
    'Transparent Pricing'
  ];

}