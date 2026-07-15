import { Component, signal } from '@angular/core';
import { SERVICES } from '../../../../core/data/services';


@Component({
  selector: 'app-services-preview',
  standalone: true,
  templateUrl: './services-preview.html',
  styleUrl: './services-preview.scss'
})
export class ServicesPreview {

  services = signal(SERVICES);

}