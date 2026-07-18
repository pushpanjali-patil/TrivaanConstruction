import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Service } from '../../../../core/models/service.model';


@Component({
  selector: 'app-service-benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-benefits.html',
  styleUrl: './service-benefits.scss'
})
export class ServiceBenefits {

  service = input.required<Service>();

}