import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-core-values',
  standalone: true,
  imports: [CommonModule, SectionTitle],
  templateUrl: './core-values.html',
  styleUrl: './core-values.scss'
})
export class CoreValues {

  values = [

    {
      icon: 'bi-shield-check',
      title: 'Integrity',
      description: 'We build trust through honesty, transparency and ethical business practices.'
    },

    {
      icon: 'bi-award',
      title: 'Quality',
      description: 'Every project is delivered with uncompromising quality and attention to detail.'
    },

    {
      icon: 'bi-person-check',
      title: 'Customer Focus',
      description: 'Our clients remain at the center of every decision and every project.'
    },

    {
      icon: 'bi-lightbulb',
      title: 'Innovation',
      description: 'We embrace modern technology and smarter construction methods.'
    }

  ];

}