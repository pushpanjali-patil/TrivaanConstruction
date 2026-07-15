import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  imports: [],
  standalone: true,
  templateUrl: './section-title.html',
  styleUrl: './section-title.scss',
})
export class SectionTitle {
 subtitle = input('');

  title = input('');

  description = input('');
}
