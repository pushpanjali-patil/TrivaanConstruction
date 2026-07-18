import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionTitle } from '../../../../../shared/components/section-title/section-title';


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
export class FaqComponent {

  faqs = [
    {
      question: 'How quickly do you respond to enquiries?',
      answer: 'We usually respond to all enquiries within 24 business hours.'
    },
    {
      question: 'Do you provide free site visits and quotations?',
      answer: 'Yes. We provide site visits and detailed quotations based on your project requirements.'
    },
    {
      question: 'Which areas do you serve?',
      answer: 'We undertake projects across Pune, Pimpri-Chinchwad, Chakan, Talegaon, Maval and other regions of Maharashtra.'
    },
    {
      question: 'What types of construction services do you offer?',
      answer: 'We provide road construction, RCC works, earthwork, infrastructure development, drainage works, paver block works and building construction.'
    }
  ];

}