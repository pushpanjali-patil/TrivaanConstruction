import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-banner',
  standalone: true,
  templateUrl: './page-banner.html',
  styleUrl: './page-banner.scss'
})
export class PageBanner {

  title = input.required<string>();

  subtitle = input('');

  backgroundImage = input('');

}