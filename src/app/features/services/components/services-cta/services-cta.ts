import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-cta',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services-cta.html',
  styleUrl: './services-cta.scss'
})
export class ServicesCta {}