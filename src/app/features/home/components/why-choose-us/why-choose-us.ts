import { Component, signal } from '@angular/core';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { WHY_CHOOSE } from '../../../../core/data/why-choose';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [SectionTitle],
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.scss'
})
export class WhyChooseUs {

  items = signal(WHY_CHOOSE);

}