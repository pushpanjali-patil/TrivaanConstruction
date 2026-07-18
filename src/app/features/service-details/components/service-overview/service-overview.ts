import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Service } from '../../../../core/models/service.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-overview',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './service-overview.html',
  styleUrl: './service-overview.scss'
})
export class ServiceOverview {

  service = input.required<Service>();

}