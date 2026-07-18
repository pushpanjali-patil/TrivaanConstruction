import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-cta',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about-cta.html',
  styleUrl: './about-cta.scss'
})
export class AboutCta {}